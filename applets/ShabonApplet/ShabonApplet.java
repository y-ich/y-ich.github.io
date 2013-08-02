/*
 * 作成日: 2005/11/23
 *
 * TODO この生成されたファイルのテンプレートを変更するには次へジャンプ:
 * ウィンドウ - 設定 - Java - コード・スタイル - コード・テンプレート
 */
//package shabon;

import java.util.*;
import java.awt.*;
import java.awt.event.*;
import java.applet.*;
import java.awt.geom.*;

/**
 * @author ich
 *
 * TODO この生成された型コメントのテンプレートを変更するには次へジャンプ:
 * ウィンドウ - 設定 - Java - コード・スタイル - コード・テンプレート
 */
public class ShabonApplet extends Applet implements Runnable {
	private static final long serialVersionUID = 1L;
	/* JBuilderが生成 はじめ */
	  private boolean isStandalone = false;
	  //引数値の取得
	  public String getParameter(String key, String def) {
	    return isStandalone ? System.getProperty(key, def) :
	      (getParameter(key) != null ? getParameter(key) : def);
	  }
	  /* JBuilderが生成 おわり */

	  protected static boolean isAntiAlias = false; // Graphics2Dオブジェクトの描画でアンチエーリアスを使うかどうか。
	  // ブラウザ用Java Plug-in 1.2ではアンチエーリアスをオンにすると正常に動作しなかった。
	  // ブラウザ用Java Plug-in 1.4.1ではアンチエーリアスをオンにするとなんとか動いたがものすごく重そう。

	  protected static boolean isDoubleBuffer = false; // 描画にダブルバッファを使うかどうか。
	  // ブラウザ用Java Plug-in 1.2/1.4.1では処理が重いよう。マウスイベントが処理しきれなくなる。

	  protected static boolean isGradientFill = false; // グラディエントの塗りつぶすかどうか。

	  private Image offScrImage; // ダブルバッファ用
	  private Graphics2D offScrGraphics2D;// ダブルバッファ用

	  static final int timeUnit = 66; // 再描画の間隔　（単位はms）

	  // マウスカーソルの移動速度　直前の位置との差なのでマウスイベントのレスポンスに依存したいい加減なもの。
	  public static float windXSpeed = 0;
	  public static float windYSpeed = 0;
	  // 他のクラスインスタンスから参照する変数だが、起動したアプレットオブジェクトを参照する方法がわからないのでクラス変数とした。

	  // windXSPeedを計算するためのマウスカーソルの直前の位置
	  private int xCursor = 0;
	  private int yCursor = 0;

	  private Bubble bubble1; // マウスカーソルにくっついたシャボン玉

	  private Thread th; // 描画用スレッド
	  private Color backGroundColor;
	  private Button button2 = new Button();
	  private Button button1 = new Button();
	  private Button button3 = new Button();// 背景色

	  //アプレットのビルド
	  public ShabonApplet() {
	  }

	  //アプレットの初期化
	  public void init() {
	    /* JBuilderが生成 はじめ */
	    try {
	      jbInit();
	    }
	    catch(Exception e) {
	      e.printStackTrace();
	    }
	    /* JBuilderが生成 おわり */

	    // マウスイベントのディスパッチクラスの登録
	    MyMouseMotion aMyMouseMotion = new MyMouseMotion();
	    addMouseMotionListener(aMyMouseMotion);

	    bubble1 = new Bubble(0, 0, 0);
	  }
	  /* JBuilderが生成 はじめ */
	  //コンポーネントの初期化
	  private void jbInit() throws Exception {
	    setSize(800,600);
	    button1.setLabel("立体");
	    button1.addActionListener(new java.awt.event.ActionListener() {
	      public void actionPerformed(ActionEvent e) {
	        button1_actionPerformed(e);
	      }
	    });
	    button2.setLabel("ダブルバッファ");
	    button2.addActionListener(new java.awt.event.ActionListener() {
	      public void actionPerformed(ActionEvent e) {
	        button2_actionPerformed(e);
	      }
	    });
	    button3.setLabel("アンチエーリアス");
	    button3.addActionListener(new java.awt.event.ActionListener() {
	      public void actionPerformed(ActionEvent e) {
	        button3_actionPerformed(e);
	      }
	    });
	    this.add(button1, null);
	    this.add(button2, null);
	    this.add(button3, null);
	  }
	  /* JBuilderが生成 おわり */

	  //アプレットの開始
	  public void start() {
	    if (th == null) {
	      th = new Thread(this);
	      th.start(); // 描画スレッド起動
	    }
	  }
	  //アプレットの停止
	  public void stop() {
	  }
	  //アプレットの破棄
	  public void destroy() {
	  }
	  //アプレットの情報取得
	  public String getAppletInfo() {
	    return "アプレット情報";
	  }
	  //引数情報の取得
	  public String[][] getParameterInfo() {
	    return null;
	  }

	  public void paint(Graphics g) {
	    Dimension d = getSize();

	    if (isDoubleBuffer == true) {
	      if (offScrImage == null) {
	        offScrImage = createImage(d.width, d.height); // ダブルバッファ用オフスクリーンイメージの生成
	        // init()ではcreateImageがnullを返す。start()でもちょっと怪しい。正確なところはよくわからないが、paint()でチェックするのが定石らしい。
	        offScrGraphics2D = (Graphics2D)offScrImage.getGraphics();
	      }
	      if (isAntiAlias == true) {
	        offScrGraphics2D.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
	      }
	      else {
	        offScrGraphics2D.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_OFF);
	      }
	      offScrGraphics2D.setColor(backGroundColor);
	      offScrGraphics2D.fillRect(0, 0, d.width, d.height);
	      // オフスクリーンの背景色は実装依存なので陽に塗りつぶす必要あり。

	      bubble1.draw(offScrGraphics2D, isGradientFill);
	      paintBubbles(offScrGraphics2D);

	      setBackground(backGroundColor);
	      // drawImage()の直前で背景色を合わせておかないと画面がちらつく。
	      g.drawImage(offScrImage, 0, 0, this);
	    }
	    else {
	      Graphics2D g2 = (Graphics2D)g;
	      if (isAntiAlias == true) {
	        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
	      }
	      else {
	        g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_OFF);
	      }
	      setBackground(backGroundColor);
	      g2.clearRect(0, 0, d.width, d.height);
	      bubble1.draw(g2, isGradientFill);
	      paintBubbles(g2);
	    }
	  }

	  synchronized void paintBubbles(Graphics2D g) {
	    // Bubble.listは複数スレッドで追加、削除をしているので描画ルーチンはsynchronized宣言。
	    int i;

	    for (i = 0; i < Bubble.list.size(); i++) {
	      Bubble aBubble = (Bubble)Bubble.list.get(i);
	      aBubble.draw(g, isGradientFill);
	    }
	  }

	  // マウスイベントディスパッチ用クラス
	  class MyMouseMotion extends java.awt.event.MouseMotionAdapter {
	    public void mouseMoved(java.awt.event.MouseEvent event) {
	      Object object = event.getSource();
	      if (object == ShabonApplet.this) {
	        ShabonApplet_MouseMoved(event);
	      }
	    }
	  }

	  void ShabonApplet_MouseMoved(java.awt.event.MouseEvent event) {
	    int aX;
	    int aY;
	    float aRadius;
	    float aSpeed;

	    aX = event.getX();
	    aY = event.getY();
	    windXSpeed = aX - xCursor;
	    windYSpeed = aY - yCursor;
	    aSpeed = Math.abs(windXSpeed) + Math.abs(windYSpeed);
	    aRadius = bubble1.getRadius() + aSpeed;
	    if (aRadius * aSpeed > 1000) {
	      Bubble b = new Bubble((float)aX, (float)aY, (float)aRadius);
	      b.start();
	      aRadius = 0;
	    }
	    bubble1.set(aX, aY, aRadius);
	    xCursor = aX;
	    yCursor = aY;
	  }

	  // 背景色の変更、マウスにくっついたシャボン玉の縮小、定期的な描画、を行うスレッド
	  public void run() {
	    int i = 0;
	    float aRadius;

	    while (true) {
	      if (i < 200) {
	        backGroundColor = new Color(0, 0, i);
	      }
	      else if (i < 400) {
	        backGroundColor = new Color(i - 200, 0, 200);
	      }
	      else if (i < 600) {
	        backGroundColor = new Color(200, 0, 599 - i);
	      }
	      else if (i < 800) {
	        backGroundColor = new Color(799 - i, 0, 0);
	      }
	      i++;
	      if (i >= 800) {
	        i = 0;
	      }

	      aRadius = bubble1.getRadius();
	      if (aRadius > 0) {
	        aRadius -= 100.0 / timeUnit;
	        if (aRadius < 0) {
	          aRadius = 0;
	        }
	      }
	      bubble1.setRadius(aRadius);
	      repaint();
	      try {
	        Thread.sleep(timeUnit);
	      }
	      catch (InterruptedException e){}
	    }
	  }

	  void button1_actionPerformed(ActionEvent e) {
	    isGradientFill = !isGradientFill;
	    if (isGradientFill) {
	      button1.setFont(new java.awt.Font("Dialog", 1, 12));
	    }
	    else {
	      button1.setFont(new java.awt.Font("Dialog", 0, 12));
	    }
	  }

	  void button2_actionPerformed(ActionEvent e) {
	    isDoubleBuffer = !isDoubleBuffer;
	    if (isDoubleBuffer) {
	      button2.setFont(new java.awt.Font("Dialog", 1, 12));
	    }
	    else {
	      button2.setFont(new java.awt.Font("Dialog", 0, 12));
	    }
	  }

	  void button3_actionPerformed(ActionEvent e) {
	    isAntiAlias = !isAntiAlias;
	    if (isAntiAlias) {
	      button3.setFont(new java.awt.Font("Dialog", 1, 12));
	    }
	    else {
	      button3.setFont(new java.awt.Font("Dialog", 0, 12));
	    }
	  }
	}

//	 シェープとしての円を定義
	class Circle extends Ellipse2D.Float {
	  protected float x;
	  protected float y;
	  protected float radius;

	  Circle(float x, float y, float radius) {
	    super(x - radius, y - radius, radius * 2, radius * 2);

	    this.x = x;
	    this.y = y;
	    this.radius = radius;
	  }

	  void set(float x, float y, float radius) {
	    this.x = x;
	    this.y = y;
	    this.radius = radius;
	    setFrame(x - radius, y - radius, radius * 2, radius * 2);
	  }

	  public float getRadius() {
	    return radius;
	  }

	  public void setRadius(float radius) {
	    this.radius = radius;
	    setFrame(x - radius, y - radius, radius * 2, radius * 2);
	  }
	}

	class Bubble extends Circle implements Runnable {
	  static final int timeUnit = ShabonApplet.timeUnit;

	  private static Color bubbleColor[] = new Color[256]; // シャボン玉の色テーブル
	  public static Vector list = new Vector(); // 存在しているシャボン玉のリスト

	  private volatile Thread th = null; // 個々のシャボン玉の動きを計算するスレッド
	  float xSpeed;
	  float ySpeed;
	  int lifeTime;

	  static {
	    int i;

	    // シャボン玉色テーブルの初期化
	    for (i = 0; i <= 255 / 5; i++) {
	      bubbleColor[i] = new Color(255, i * 5, 0);
	      bubbleColor[i + 255 / 5] = new Color(255 - i * 5, 255, 0);
	      bubbleColor[i + 2 * 255 / 5] = new Color(0, 255, i * 5);
	      bubbleColor[i + 3 * 255 / 5] = new Color(0, 255 - i * 5, 255);
	      bubbleColor[i + 4 * 255 / 5] = new Color(i * 5, 0, 255);
	    }
	  }

	  Bubble(float x, float y, float radius) {
	    super(x, y, radius);
	  }

	  void set() {
	      set(x, y, radius);
	  }

	  public void start() {
	    list.add(this);
	    lifeTime = (int)radius;
	    th = new Thread(this);
	    th.start();
	  }

	  public void draw(Graphics2D g, boolean gradientFill) {
	    int color = (int)radius;

	    if (color >= 256) {
	      color = 255;
	    }

	    if (ShabonApplet.isGradientFill) {
//	      g.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 0.7f));
	      g.setPaint(new GradientPaint((float)this.getMinX(), (float)this.getMinY(), Color.white, (float)this.getMaxX(), (float)this.getMaxY(), bubbleColor[color]));
	      g.fill(this);
	    }
	    else {
	      g.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 1.0f));
	      g.setColor(bubbleColor[color]);
	      g.draw(this);
	    }
	  }

	  public void run() {
	    while (true) {
	      xSpeed += (ShabonApplet.windXSpeed / 10 + Math.random() * 10 - 5) * timeUnit / 100;
	      ySpeed += (ShabonApplet.windYSpeed / 10 + Math.random() * 10 - 5) * timeUnit / 100;

	      x += xSpeed;
	      y += ySpeed;

	      if (lifeTime-- < 0) {
	        list.remove(this);
	        th = null;
	      }
	      set();

	      try {
	        Thread.sleep(timeUnit);
	      }
	      catch (InterruptedException e) {
	      }
	    }
	  }
	}

