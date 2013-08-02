/*
 * �쐬��: 2005/11/23
 *
 * TODO ���̐������ꂽ�t�@�C���̃e���v���[�g��ύX����ɂ͎��փW�����v:
 * �E�B���h�E - �ݒ� - Java - �R�[�h�E�X�^�C�� - �R�[�h�E�e���v���[�g
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
 * TODO ���̐������ꂽ�^�R�����g�̃e���v���[�g��ύX����ɂ͎��փW�����v:
 * �E�B���h�E - �ݒ� - Java - �R�[�h�E�X�^�C�� - �R�[�h�E�e���v���[�g
 */
public class ShabonApplet extends Applet implements Runnable {
	private static final long serialVersionUID = 1L;
	/* JBuilder������ �͂��� */
	  private boolean isStandalone = false;
	  //�����l�̎擾
	  public String getParameter(String key, String def) {
	    return isStandalone ? System.getProperty(key, def) :
	      (getParameter(key) != null ? getParameter(key) : def);
	  }
	  /* JBuilder������ ����� */

	  protected static boolean isAntiAlias = false; // Graphics2D�I�u�W�F�N�g�̕`��ŃA���`�G�[���A�X���g�����ǂ����B
	  // �u���E�U�pJava Plug-in 1.2�ł̓A���`�G�[���A�X���I���ɂ���Ɛ���ɓ��삵�Ȃ������B
	  // �u���E�U�pJava Plug-in 1.4.1�ł̓A���`�G�[���A�X���I���ɂ���ƂȂ�Ƃ������������̂������d�����B

	  protected static boolean isDoubleBuffer = false; // �`��Ƀ_�u���o�b�t�@���g�����ǂ����B
	  // �u���E�U�pJava Plug-in 1.2/1.4.1�ł͏������d���悤�B�}�E�X�C�x���g������������Ȃ��Ȃ�B

	  protected static boolean isGradientFill = false; // �O���f�B�G���g�̓h��Ԃ����ǂ����B

	  private Image offScrImage; // �_�u���o�b�t�@�p
	  private Graphics2D offScrGraphics2D;// �_�u���o�b�t�@�p

	  static final int timeUnit = 66; // �ĕ`��̊Ԋu�@�i�P�ʂ�ms�j

	  // �}�E�X�J�[�\���̈ړ����x�@���O�̈ʒu�Ƃ̍��Ȃ̂Ń}�E�X�C�x���g�̃��X�|���X�Ɉˑ��������������Ȃ��́B
	  public static float windXSpeed = 0;
	  public static float windYSpeed = 0;
	  // ���̃N���X�C���X�^���X����Q�Ƃ���ϐ������A�N�������A�v���b�g�I�u�W�F�N�g���Q�Ƃ�����@���킩��Ȃ��̂ŃN���X�ϐ��Ƃ����B

	  // windXSPeed���v�Z���邽�߂̃}�E�X�J�[�\���̒��O�̈ʒu
	  private int xCursor = 0;
	  private int yCursor = 0;

	  private Bubble bubble1; // �}�E�X�J�[�\���ɂ��������V���{����

	  private Thread th; // �`��p�X���b�h
	  private Color backGroundColor;
	  private Button button2 = new Button();
	  private Button button1 = new Button();
	  private Button button3 = new Button();// �w�i�F

	  //�A�v���b�g�̃r���h
	  public ShabonApplet() {
	  }

	  //�A�v���b�g�̏�����
	  public void init() {
	    /* JBuilder������ �͂��� */
	    try {
	      jbInit();
	    }
	    catch(Exception e) {
	      e.printStackTrace();
	    }
	    /* JBuilder������ ����� */

	    // �}�E�X�C�x���g�̃f�B�X�p�b�`�N���X�̓o�^
	    MyMouseMotion aMyMouseMotion = new MyMouseMotion();
	    addMouseMotionListener(aMyMouseMotion);

	    bubble1 = new Bubble(0, 0, 0);
	  }
	  /* JBuilder������ �͂��� */
	  //�R���|�[�l���g�̏�����
	  private void jbInit() throws Exception {
	    setSize(800,600);
	    button1.setLabel("����");
	    button1.addActionListener(new java.awt.event.ActionListener() {
	      public void actionPerformed(ActionEvent e) {
	        button1_actionPerformed(e);
	      }
	    });
	    button2.setLabel("�_�u���o�b�t�@");
	    button2.addActionListener(new java.awt.event.ActionListener() {
	      public void actionPerformed(ActionEvent e) {
	        button2_actionPerformed(e);
	      }
	    });
	    button3.setLabel("�A���`�G�[���A�X");
	    button3.addActionListener(new java.awt.event.ActionListener() {
	      public void actionPerformed(ActionEvent e) {
	        button3_actionPerformed(e);
	      }
	    });
	    this.add(button1, null);
	    this.add(button2, null);
	    this.add(button3, null);
	  }
	  /* JBuilder������ ����� */

	  //�A�v���b�g�̊J�n
	  public void start() {
	    if (th == null) {
	      th = new Thread(this);
	      th.start(); // �`��X���b�h�N��
	    }
	  }
	  //�A�v���b�g�̒�~
	  public void stop() {
	  }
	  //�A�v���b�g�̔j��
	  public void destroy() {
	  }
	  //�A�v���b�g�̏��擾
	  public String getAppletInfo() {
	    return "�A�v���b�g���";
	  }
	  //�������̎擾
	  public String[][] getParameterInfo() {
	    return null;
	  }

	  public void paint(Graphics g) {
	    Dimension d = getSize();

	    if (isDoubleBuffer == true) {
	      if (offScrImage == null) {
	        offScrImage = createImage(d.width, d.height); // �_�u���o�b�t�@�p�I�t�X�N���[���C���[�W�̐���
	        // init()�ł�createImage��null��Ԃ��Bstart()�ł�������Ɖ������B���m�ȂƂ���͂悭�킩��Ȃ����Apaint()�Ń`�F�b�N����̂���΂炵���B
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
	      // �I�t�X�N���[���̔w�i�F�͎����ˑ��Ȃ̂ŗz�ɓh��Ԃ��K�v����B

	      bubble1.draw(offScrGraphics2D, isGradientFill);
	      paintBubbles(offScrGraphics2D);

	      setBackground(backGroundColor);
	      // drawImage()�̒��O�Ŕw�i�F�����킹�Ă����Ȃ��Ɖ�ʂ�������B
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
	    // Bubble.list�͕����X���b�h�Œǉ��A�폜�����Ă���̂ŕ`�惋�[�`����synchronized�錾�B
	    int i;

	    for (i = 0; i < Bubble.list.size(); i++) {
	      Bubble aBubble = (Bubble)Bubble.list.get(i);
	      aBubble.draw(g, isGradientFill);
	    }
	  }

	  // �}�E�X�C�x���g�f�B�X�p�b�`�p�N���X
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

	  // �w�i�F�̕ύX�A�}�E�X�ɂ��������V���{���ʂ̏k���A����I�ȕ`��A���s���X���b�h
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

//	 �V�F�[�v�Ƃ��Ẳ~���`
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

	  private static Color bubbleColor[] = new Color[256]; // �V���{���ʂ̐F�e�[�u��
	  public static Vector list = new Vector(); // ���݂��Ă���V���{���ʂ̃��X�g

	  private volatile Thread th = null; // �X�̃V���{���ʂ̓������v�Z����X���b�h
	  float xSpeed;
	  float ySpeed;
	  int lifeTime;

	  static {
	    int i;

	    // �V���{���ʐF�e�[�u���̏�����
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

