/*
private Restaurant sogo;
private Menu m;
private Hand saved;
private Card tapped, oldTapped, clicked, trueClicked;
private int[] info;
private ArrayList<String> narration;
private String humanTurnedOver;
private boolean gameCreated, letsGo, viewingAchievements, viewingInstructions, isChop, isSpoon, viewingSpoon, beingSpooned, isMenu, isTOB, achievementsCompleted, resetOne, resetTwo;
private int rType, rIndex, priority, time;

public boolean[] foodsCompleted, achievements;
public int[] hms;
public boolean error;
public float cardSize;
public int cardsLeft, replacementType, takeoutCounts, timeToBeatJeff;
*/

public void settings()
{
  size(1400, 800);
  /*
  foodsCompleted = new boolean[25];
  achievements = new boolean[25];
  time = 0;
  timeToBeatJeff = 0;
  resetOne = false;
  resetTwo = false;
  */
}

public void draw()
{
  background(34);
}
/*
public void setup()
{
  m = new Menu();
  saved = new Hand(new Card[0]);
  tapped = null;
  oldTapped = null;
  clicked = null;
  trueClicked = null;
  info = new int[8];
  narration = new ArrayList<String>();
  humanTurnedOver = "";
  gameCreated = false;
  letsGo = false;
  viewingAchievements = false;
  viewingInstructions = false;
  isChop = false;
  isSpoon = false;
  viewingSpoon = false;
  beingSpooned = false;
  isMenu = false;
  isTOB = false;
  error = false;
  rType = -1;
  rIndex = -1;
  priority = 1;  
  cardSize = 99;
  cardsLeft = 9;
  replacementType = -1;
  takeoutCounts = 0;
}

private void randomRolls()
{
  info[0] = 3;
  double rand = Math.random();
  if(rand <= .33)
    info[0] = 1;
  else if(rand <= .66)
    info[0] = 2;
   
  m.moveOn();
}

private void randomSpecials()
{
  ArrayList<Integer> specTypes = new ArrayList<Integer>();
  specTypes.add(1);
  specTypes.add(2); 
  specTypes.add(3); 
  specTypes.add(4);
  specTypes.add(5);
  specTypes.add(6); 
  specTypes.add(7); 
  specTypes.add(8);
  
  info[1] = specTypes.remove((int) (Math.random() * specTypes.size()));
  info[2] = specTypes.remove((int) (Math.random() * specTypes.size()));
  
  for(int i = 0; i < 2; i++)
    m.moveOn();
}

private void randomApps()
{
  ArrayList<Integer> appTypes = new ArrayList<Integer>();
  appTypes.add(1); 
  appTypes.add(2); 
  appTypes.add(3); 
  appTypes.add(4); 
  appTypes.add(5);
  appTypes.add(6); 
  appTypes.add(7); 
  appTypes.add(8); 
  
  info[3] = appTypes.remove( (int) (Math.random() * appTypes.size()));
  info[4] = appTypes.remove( (int) (Math.random() * appTypes.size()));
  info[5] = appTypes.remove( (int) (Math.random() * appTypes.size()));
  
  for(int i = 0; i < 3; i++)
    m.moveOn();
}

private void randomDessert()
{
  info[6] = 3;
  if(Math.random() <= .33)
    info[6] = 1;
  else if(Math.random() <= .66)
    info[6] = 2;
    
  m.moveOn();
}

private void initializeToxic()
{
  info[0] = 1;
  info[1] = 1; 
  info[2] = 6;
  info[3] = 1;
  info[4] = 2; 
  info[5] = 3;
  info[6] = 1;
  info[7] = 4;
  
  for(int i = 0; i < 8; i++)
    m.moveOn();
}

public void draw()
{
  if(error)
  {
    background(255, 0, 0);
    textSize(100);
    text("ERROR", 555, 435);
  }
  else 
  {
    background(0, 0, 64);
    
    if(!resetOne && timeToBeatJeff != 0 && millis() - timeToBeatJeff > 10000)
    {
      resetOne = true;
      setup();
    }
    
    if(!resetTwo && timeToBeatJeff != 0)
    {
      resetTwo = true;
      hms = convertTTBJ();
    }
 
    if(!m.isSelected())
    {
      if(viewingAchievements)
        m.drawAchievements(achievementsCompleted);
      else if(viewingInstructions)
        m.drawInstructions();
      else m.drawSelection(achievementsCompleted);
    }
    else 
    {
      if(!gameCreated)
      {
        if(info[4] == 8)
        {
          int saved = info[3];
          info[3] = info[4];
          info[4] = saved;
        }
        else if(info[5] == 8)
        {
          int saved = info[3];
          info[3] = info[5];
          info[5] = saved;
        }
  
        sogo = new Restaurant(4, info, achievementsCompleted);
        gameCreated = true;
      }
    
      if(letsGo)
      {
        if(isSpoon)
          m.drawSpoonButton(viewingSpoon);
          
        if(isSpoon && viewingSpoon)
          m.drawSpoon(info);
        else sogo.drawSelf(tapped, oldTapped, sogo.getParty()[0].getHand(), isChop, isSpoon, isMenu, isTOB, priority, mouseX, mouseY);
        
        if(beingSpooned)
          sogo.getParty()[rIndex].getPlatter().highlightSpoon(rIndex != 3, priority); 
      }
      else m.drawDeckPreview(info);
    }
  }
}

public void mousePressed()
{ 
  if(millis() - time < 1 || (timeToBeatJeff != 0 && millis() - timeToBeatJeff < 10000))
    return;
    
  time = millis();
  
  if(m.isSelected())
  { 
    if(sogo.getRoundNum() == 4)
      if(dist(mouseX, mouseY, 1000, 400) + dist(mouseX, mouseY, 1200, 400) <= 250)
      {
        updateAchievements(); 
        setup();
      }
      else if(dist(mouseX, mouseY, 200, 400) + dist(mouseX, mouseY, 400, 400) <= 250)
      {
        int[] saveInfo = info;  
        setup();
        
        for(int i = 0; i < 8; i++)
          m.moveOn();
          
        info = saveInfo;
        sogo = new Restaurant(4, info, achievementsCompleted);
      }
      else return;
    
    if(!letsGo && dist(mouseX, mouseY, 600, 420) + dist(mouseX, mouseY, 800, 420) <= 250)
      letsGo = true;
    else if(cardsLeft == 0)
    {
      if(dist(mouseX, mouseY, 600, 530) + dist(mouseX, mouseY, 800, 530) <= 250)
      {
        buttonPressed();  
        narration = new ArrayList<String>();
      }
    }
    else if(isSpoon)
    {
      if(viewingSpoon)
      {
        int requested = m.getRequested(info, mouseX, mouseY);
      
        if(requested != -1)
        {
          if(requested == 26)
            if(oldTapped != null && oldTapped.getType() != 10 + priority)
              replacementType = oldTapped.getType();
            else 
            {
              viewingSpoon = false;
              narration = new ArrayList<String>();
              narration.add("you did not select a card to copy.");
              return;
            }
            
          sogo.humanSpoonRequest(requested, priority);
          
          priority++;
          isSpoon = false;
          viewingSpoon = false;
         
          handleUrMiso();
          
          handleSpecials(null);
          
          handleUrMiso();
          
          if(!beingSpooned && !isMenu && !isTOB)
          {
            sogo.wrapUp();
            priority = 1;
            oldTapped = null;
            tapped = null;
          }   
        }  
      }
      
      if(dist(mouseX, mouseY, 600, 160) + dist(mouseX, mouseY, 800, 160) <= 250)
      {
        viewingSpoon = !viewingSpoon;
        narration = new ArrayList<String>();
      }
    }
    else if(letsGo && !isTOB && mouseY >= 450 && mouseY <= 610)
    {
      ArrayList<Card> playerCards = sogo.getParty()[0].getHand().getCards();
      int size = playerCards.size();
      
      for(int i = 0; i < size; i++)
        if(mouseX > ((width - cardSize * size) / 2) + cardSize * i && mouseX <= ((width - cardSize * size) / 2) + cardSize * (i +  1))
        {
          clicked = playerCards.get(i);
          if(!beingSpooned)
            trueClicked = clicked;
          
          if(clicked.getType() == 26 && tapped != null && !tapped.getColor().equals("ow") && (!isChop || tapped.getType() != 10 + priority))
            clicked.setType(tapped.getType()); 
          
          if(clicked.getType() == 26 && !beingSpooned)
          {
            narration = new ArrayList<String>();
            narration.add("you did not select a card to copy.");
            return;
          }
            
          if(isChop)
          {
            narration = new ArrayList<String>();
            sogo.chopHuman(priority, clicked);
            isChop = false; 
          }
          else if(beingSpooned)
          {
            if(rType < 46)
              if(clicked.getType() == rType)
              {
                narration = new ArrayList<String>();
                sogo.humanSpoonAnswer(priority, clicked, rIndex);
                beingSpooned = false;
                priority++;
              }
              else return;
            else
            {
              int[] subtypes = new Card(rType).getSubtypes();
              
              for(int sub : subtypes)
                if(clicked.getType() == sub)
                {
                  narration = new ArrayList<String>();
                  sogo.humanSpoonAnswer(priority, clicked, rIndex);
                  beingSpooned = false;
                  priority++;
                }
                
              if(beingSpooned)
                return;
            }   
          }
          else if(isMenu)   
            if(clicked.getColor().equals("ow"))
            {
              narration = new ArrayList<String>();
              narration.add("you cannot play a menu from a menu.");
              return;
            }
            else
            {
              narration = new ArrayList<String>();
              sogo.menuHuman(priority, clicked, saved);
              isMenu = false;
            }
          else 
          {
            narration = new ArrayList<String>();
            sogo.playTurn(clicked);
          }
          
          handleUrMiso();
            
          if(!beingSpooned)
            handleSpecials(trueClicked);
            
          handleUrMiso();
  
          if(!isChop && !isSpoon && !beingSpooned && !isMenu && !isTOB)
          {
            sogo.wrapUp();
            priority = 1;
            oldTapped = null;
            tapped = null;
          }
        }
    }
    
    if(!beingSpooned)
    {
      oldTapped = tapped;
      
      int index = sogo.getParty()[0].getPlatter().getTapped(mouseX, mouseY);
      if(index != -1)
        tapped = sogo.getParty()[0].getPlatter().getCards().get(index);
      else tapped = null;   
    }
    
    if(isTOB && tapped != null)
    {
      if(tapped.getType() == 10 + priority)
      {
        narration = new ArrayList<String>();
        
        if(humanTurnedOver.equals(""))
          narration.add("you are not taking out any food with your takeout box.");
        else
        { 
          humanTurnedOver = humanTurnedOver.substring(0, humanTurnedOver.length() - 2);
          narration.add("you turned over " + humanTurnedOver + " with a takeout box!");
          takeoutCounts++;
        }
        
        humanTurnedOver = "";
        
        sogo.getDP().add(sogo.getParty()[0].getPlatter().removeSpec(priority, true));
        tapped = null;
        isTOB = false;   
        priority++;
        
        handleSpecials(null);
        sogo.wrapUp();
        priority = 1;
        oldTapped = null;
        tapped = null;
      }
      else if(tapped.getType() != 69)
      {
        humanTurnedOver += tapped + ", ";
        tapped.setType(69);
      }
    }
  }
  else
  {
    ArrayList<Card> selection = m.getSelection();
    int ss = m.getSelectionStage();
    
    if(!viewingInstructions && !viewingAchievements && ss <= 7)
    {   
      int size = selection.size();
      
      if(dist(mouseX, mouseY, 100, 150) + dist(mouseX, mouseY, 300, 150) <= 250 && (ss <= 2 || ss == 4 || ss == 7))
      {
        if(ss == 1)
        randomRolls();  
        else if(ss == 2)
          randomSpecials();
        else if(ss == 4)
          randomApps();
        else randomDessert(); 
      }
      else if(dist(mouseX, mouseY, 1100, 150) + dist(mouseX, mouseY, 1300, 150) <= 250 && ss == 1)
      {
        randomRolls();
        randomSpecials();
        randomApps();
        randomDessert();
      }
      else if(mouseY >= 275 && mouseY <= 525)
      {     
        for(int i = 0; i < size; i++)
          if(mouseX > ((width - 175.0 * size) / 2) + 175.0 * i && mouseX <= ((width - 175.0 * size) / 2) + 175.0 * (i +  1))
          { 
            if(ss == 1)
              info[0] = selection.get(i).getType() - 45; 
            else if(ss == 2)
            {
              info[1] = selection.get(i).getType() - 48;
              selection.remove(i);
            } 
            else if(ss == 3)
              info[2] = selection.get(i).getType() - 48;    
            else if(ss == 4)
            {
              info[3] = selection.get(i).getType() - 56;
              selection.remove(i);
            }  
            else if(ss == 5)
            {
              info[4] = selection.get(i).getType() - 56;
              selection.remove(i);
            } 
            else if(ss == 6)
              info[5] = selection.get(i).getType() - 56;
            else if(ss == 7)
              info[6] = selection.get(i).getType() - 64;
                                
            m.moveOn();
          }
      }
    }
    
    if(ss == 1)
      if(viewingInstructions)
      {
        if(dist(mouseX, mouseY, 600, 700) + dist(mouseX, mouseY, 800, 700) <= 250)
        {
          viewingInstructions = false;
          while(m.getRulesStage() > 1)
            m.shiftRules(false);
        }
        else if(m.getRulesStage() != 1 && (dist(mouseX, mouseY, 130, 700) + dist(mouseX, mouseY, 330, 700) <= 250))
          m.shiftRules(false);
        else if(m.getRulesStage() != 5 && (dist(mouseX, mouseY, 1070, 700) + dist(mouseX, mouseY, 1270, 700) <= 250))
          m.shiftRules(true);     
      }
      else if(viewingAchievements)
      {
        if(dist(mouseX, mouseY, 1120, 243) + dist(mouseX, mouseY, 1320, 243) <= 250)
          viewingAchievements = false;
        else if(dist(mouseX, mouseY, 1120, 557) + dist(mouseX, mouseY, 1320, 557) <= 250 && achievementsCompleted)
        {
          viewingAchievements = false;
          initializeToxic();
        }
      }
      else if(dist(mouseX, mouseY, 1100, 700) + dist(mouseX, mouseY, 1300, 700) <= 250)
      {
          viewingInstructions = true;
      }
      else if(dist(mouseX, mouseY, 100, 700) + dist(mouseX, mouseY, 300, 700) <= 250)
      {
          viewingAchievements = true;
      }
      
    if(ss == 8)
    {
      if(dist(mouseX, mouseY, 130, 400) + dist(mouseX, mouseY, 330, 400) <= 250)
        info[7] = 1;
      else if(dist(mouseX, mouseY, 600, 400) + dist(mouseX, mouseY, 800, 400) <= 250)
        info[7] = 2;
      else if(dist(mouseX, mouseY, 1070, 400) + dist(mouseX, mouseY, 1270, 400) <= 250)
        info[7] = 3;
        
      if(info[7] != 0)
        m.moveOn();
    }
  }
}

public void buttonPressed()
{
  oldTapped = null;
  tapped = null;
  clicked = null;
  trueClicked = null;
  sogo.moveOn();
  sogo.prepare(achievementsCompleted);
}

public void handleUrMiso()
{
  if(info[0] == 3)
    sogo.scoreUramaki();
            
  if(info[3] == 4 || info[4] == 4 || info[5] == 4)
    sogo.checkMiso();
}

public void handleChop(Card clicked)
{
  if(cardsLeft > 1 && !sogo.getParty()[0].getSpoChStatus())
    if(clicked.getTrueType() == 26)
    {
      if(oldTapped != null && oldTapped.getType() == priority + 10 && tapped.getType() != priority + 10)
      {
        isChop = true;
        return;
      }
    }
    else if(tapped != null && tapped.getType() == priority + 10)
    {
      isChop = true;
      return;
    }
  
  sogo.chopComputers(priority);         
  priority++;
}

public void handleSpoon(Card clicked)
{   
  if(cardsLeft > 1 && clicked != null && !sogo.getParty()[0].getSpoChStatus())
    if(clicked.getTrueType() == 26)
    {
      if(oldTapped != null && oldTapped.getType() == priority + 10 && tapped.getType() != priority + 10)
      {
        isSpoon = true;
        return;
      }
    }
    else if(tapped != null && tapped.getType() == priority + 10)
    {
      isSpoon = true;
      return;
    } 
  
  int[] results = sogo.spoonComputers(priority);
  
  if(results[1] >= 1)
  {
    beingSpooned = true;
    rType = results[0];
    rIndex = results[1];
    return;
  }
    
  priority++;
}

public void handleMenu()
{
  Card result = sogo.getParty()[0].getPlatter().removeSpec(priority, false);
            
  if(result != null && !isMenu)
  {
    saved = sogo.getParty()[0].getHand();
    sogo.generateHumanMenu();           
    isMenu = true;
    return;
  }

  sogo.menuComputers(priority);
  priority++;
}

public void handleTOB()
{     
  if(sogo.getParty()[0].getPlatter().removeSpec(priority, false) != null)
  {
    isTOB = true;
    return;
  }
               
  sogo.TOBComputers(priority);   
  priority++;
}

public void handleSpecials(Card clicked)
{
  if(info[1] != 1 && info[2] != 1 && priority < 4)
    priority = 4;
  while(priority < 4)
  {
    handleChop(clicked);
    if(isChop)
      return;
  }
    
  if(info[1] != 2 && info[2] != 2 && priority >= 4 && priority < 7)
    priority = 7;
  while(priority >= 4 && priority < 7)
  {
    handleSpoon(clicked);
    if(isSpoon || beingSpooned)
      return;
  }
    
  if(info[1] != 3 && info[2] != 3 && priority >= 7 && priority < 10)
    priority = 10;
  while(priority >= 7 && priority < 10)
  {
    handleMenu();
    if(isMenu)
      return;
  }
    
  if(info[1] != 4 && info[2] != 4 && priority >= 10 && priority < 13)
    priority = 13; 
  while(priority >= 10 && priority < 13)
  {
    handleTOB();
    if(isTOB)
      return;
  }
}

private void updateSeasonedCompetitor()
{
  for(int i = 22; i < 25; i++)
    if(!foodsCompleted[i])
      return;
      
  achievements[23] = true;
}

private void updateMaturePalate()
{
  for(int i = 0; i < 22; i++)
    if(!foodsCompleted[i])
      return;
      
  achievements[24] = true;
}

private void updateAchievements()
{
  updateSeasonedCompetitor();
  updateMaturePalate();
  
  for(int i = 0; i < 25; i++)
    if(!achievements[i])
      return;

  achievementsCompleted = true;
}

private int[] convertTTBJ()
{
  return new int[]{timeToBeatJeff / 3600000, (timeToBeatJeff % 3600000) / 60000, ((timeToBeatJeff % 3600000) % 60000) / 1000};
}

class Card
{
  private String col;
  private int type, saveType; 
  
  public Card(int t)
  {
    col = "";
    saveType = t;
    type = t;
    toString();
  }
  
  public void drawSelf(float topLeftX, float topLeftY)
  {
    drawSelf(topLeftX, topLeftY, false);
  }
  
  public void drawOutline(float topLeftX, float topLeftY)
  {
    drawSelf(topLeftX, topLeftY, true);
  }
  
  public void drawMixOutline(float topLeftX, float topLeftY)
  {
    drawOutline(topLeftX, topLeftY);
    stroke(255, 255, 0);
    strokeWeight(3);
    if(topLeftY == 640)
    {
      line(topLeftX, topLeftY + 160, topLeftX + cardSize, topLeftY + 160);
      line(topLeftX, topLeftY + 80, topLeftX, topLeftY + 160);
      line(topLeftX + cardSize, topLeftY + 80, topLeftX + cardSize, topLeftY + 160);
    }
    else
    {
        line(topLeftX, topLeftY + 40, topLeftX + cardSize, topLeftY + 40);
        line(topLeftX, topLeftY + 20, topLeftX, topLeftY + 40);
        line(topLeftX + cardSize, topLeftY + 20, topLeftX + cardSize, topLeftY + 40);
    }
    strokeWeight(1);
  }
  
  private void drawSelf(float topLeftX, float topLeftY, boolean outline)
  {
    PImage art = loadImage(this + ".jpg");
    
    if(type <= 45 || type == 69)
    {
      art.resize((int)cardSize, 160);
      
      if(outline)
      {
        noFill();
        strokeWeight(3);
        
        if(topLeftY != 640)
          rect(topLeftX, topLeftY, cardSize, 40);
        else rect(topLeftX, topLeftY, cardSize, 160);
        
        strokeWeight(1);
      }
    }
    else 
    {
      art.resize(175, 250);
      
      if(outline && type != 68 && foodsCompleted[type - 46])
      {
        noFill();
        stroke(0, 255, 0);
        strokeWeight(4);
        rect(topLeftX, topLeftY, 175, 250);
        stroke(0);
        strokeWeight(1);
       }
    }
    
    if(!outline)
      image(art, topLeftX, topLeftY);
  }
  
  public int getType()
  {
    return type;
  }
  
  public int getTrueType()
  {
    return saveType;
  }
  
  public void setType(int t)
  {
    type = t;
    toString();
  }
  
  public void correct()
  {
    setType(saveType);
  }
  
  public boolean isDisguised()
  {
    return type != saveType;
  }
  
  public String getColor()
  {
    return col;
  }

  public int[] getSubtypes()
  {
    if(type == 46)
      return new int[]{4, 5, 6};
    else if(type == 48)
      return new int[]{8, 9, 10};
    else if(type == 49)
      return new int[]{11, 12, 13};
    else if(type == 50)
      return new int[]{14, 15, 16};
    else if(type == 51)
      return new int[]{17, 18, 19};
    else if(type == 52)
      return new int[]{20, 21, 22};
    else if(type == 64)
      return new int[]{34, 35, 36, 37};
    else if(type == 67)
      return new int[]{40, 41, 42, 43, 44, 45};
    else if(type == 68)
      return new int[]{1, 2, 3};
    return null;
  }
   
  public String toString()
  {
    switch(type)
    {
      case 1: col = "y"; return "egg nigiri";
      case 2: col = "y"; return "salmon nigiri";
      case 3: col = "y"; return "squid nigiri";
      case 4: col = "r"; return "maki(1)";
      case 5: col = "r"; return "maki(2)";
      case 6: col = "r"; return "maki(3)";
      case 7: col = "plum"; return "temaki";
      case 8: col = "lime"; return "uramaki(3)";
      case 9: col = "lime"; return "uramaki(4)";
      case 10: col = "lime"; return "uramaki(5)";
      case 11: col = "sky"; return "chopsticks(1)";
      case 12: col = "sky"; return "chopsticks(2)";
      case 13: col = "sky"; return "chopsticks(3)";
      case 14: col = "gray"; return "spoon(4)";
      case 15: col = "gray"; return "spoon(5)";
      case 16: col = "gray"; return "spoon(6)";
      case 17: col = "ow"; return "menu(7)";
      case 18: col = "ow"; return "menu(8)";
      case 19: col = "ow"; return "menu(9)";
      case 20: col = "lbr"; return "takeout box(10)";
      case 21: col = "lbr"; return "takeout box(11)";
      case 22: col = "lbr"; return "takeout box(12)";
      case 23: col = "br"; return "tea";
      case 24: col = "y"; return "wasabi";
      case 25: col = "o"; return "soysauce";
      case 26: col = "rb"; return "special order";
      case 27: col = "i"; return "dumpling";
      case 28: col = "lp"; return "tempura";
      case 29: col = "lg"; return "sashimi";
      case 30: col = "t"; return "miso soup";
      case 31: col = "dp"; return "edamame";
      case 32: col = "m"; return "eel";
      case 33: col = "g"; return "tofu";
      case 34: col = "hp"; return "onigiri(circle)";
      case 35: col = "hp"; return "onigiri(square)";
      case 36: col = "hp"; return "onigiri(triangle)";
      case 37: col = "hp"; return "onigiri(flat)";
      case 38: col = "p"; return "pudding";
      case 39: col = "b"; return "green tea ice cream";
      case 40: col = "peach"; return "fruit(double watermelon)";
      case 41: col = "peach"; return "fruit(double pineapple)";
      case 42: col = "peach"; return "fruit(double orange)";
      case 43: col = "peach"; return "fruit(watermelon orange)";
      case 44: col = "peach"; return "fruit(pineapple orange)";
      case 45: col = "peach"; return "fruit(watermelon pineapple)";
      case 46: return "maki";
      case 47: return "temakiguide";
      case 48: return "uramaki";
      case 49: return "chopsticks";
      case 50: return "spoon";
      case 51: return "menu";
      case 52: return "takeout box";
      case 53: return "teaguide";
      case 54: return "wasabiguide";
      case 55: return "soysauceguide";
      case 56: return "specialguide";
      case 57: return "dumplingguide";
      case 58: return "tempuraguide";
      case 59: return "sashimiguide";
      case 60: return "misoguide";
      case 61: return "edamameguide";
      case 62: return "eelguide";
      case 63: return "tofuguide";
      case 64: return "onigiri";
      case 65: return "puddingguide";
      case 66: return "gticguide";
      case 67: return "fruit";
      case 68: return "nigiri";
      case 69: col = "gw"; return "turned over card";
    }
    
    return "backOfCard";
  }
}

class Deck
{
  private ArrayList<Card> cards, desCards;
  
  public Deck(int[] info)
  {
    cards = new ArrayList<Card>();
    desCards = new ArrayList<Card>();
    
    fillDesDeck(info[6]);
    shuffleDessertDeck();
    
    addNigiri();
    addRolls(info[0]);
    addSpecials(info[1]);
    addSpecials(info[2]);
    addApps(info[3]);
    addApps(info[4]);
    addApps(info[5]);
    
    for(int i = 0; i < 5; i++)
      cards.add(dealDesCard());
      
    shuffleMainDeck();
  }
  
  public ArrayList<Card> getCards()
  {
    return cards;
  }
  
  public ArrayList<Card> getDesCards()
  {
    return desCards;
  }
  
  public Card dealCard()
  {
    return cards.remove(cards.size() - 1);
  }
  
  public Card dealDesCard()
  {
    return desCards.remove(desCards.size() - 1);
  }
  
  public void replenish(ArrayList<Card> usedCards, int moreDes)
  {
    for(Card c: usedCards)
      cards.add(c);
    
    for(int i = 0; i < moreDes; i++)
      cards.add(dealDesCard());
      
    shuffleMainDeck();
  }
  
  private void add111(int mid, boolean isBigDeck)
  {
    if(isBigDeck)
    {
      cards.add(new Card(mid - 1));
      cards.add(new Card(mid));
      cards.add(new Card(mid + 1));
    }
    else
    {
      desCards.add(new Card(mid - 1));
      desCards.add(new Card(mid));
      desCards.add(new Card(mid + 1));
    }
  }
  
  private void add453(int mid)
  {
    for(int i = 0; i < 5; i++)
    {
      cards.add(new Card(mid));
      
      if(i >= 1)
        cards.add(new Card(mid - 1));
        
      if(i >= 2)
        cards.add(new Card(mid + 1));
    }
  }
  
  private void addNigiri()
  {
    add453(2);
  }
  
  private void addRolls(int choice)
  {
    if(choice == 1)
      add453(5);
    else if(choice == 2)
      for(int i = 0; i < 12; i++)
        cards.add(new Card(7));
    else for(int i = 0; i < 4; i++)
      add111(9, true);
  }
  
  private void addSpecials(int choice)
  {
    if(choice <= 4)
      add111(9 + choice * 3, true);
    else for(int i = 0; i < 3; i++)
      cards.add(new Card(18 + choice));   
  }
  
  private void addApps(int choice)
  {
    if(choice <= 7)
      for(int i = 0; i < 8; i++)
        cards.add(new Card(26 + choice));
    else for(int i = 0; i < 2; i++)
    {
      cards.add(new Card(34));
      cards.add(new Card(35));
      cards.add(new Card(36));
      cards.add(new Card(37));
    }
  }
  
  private void fillDesDeck(int choice)
  {
    if(choice <= 2)
      for(int i = 0; i < 15; i++)
        desCards.add(new Card(37 + choice));
    else for(int i = 0; i < 3; i++)
    {
      add111(44, false);
      
      if(i >= 1)
        add111(41, false);
    }
  }
  
  private void shuffleDeck(boolean isBigDeck)
  {
    ArrayList<Card> shufCards = new ArrayList<Card>();
    
    if(isBigDeck)
    {
      int size = cards.size();
      
      for(int i = 0; i < size; i++)
        shufCards.add(cards.remove( (int) (Math.random() * cards.size())));
        
      cards = shufCards;  
    }
    else
    {
      int size = desCards.size();
      
      for(int i = 0; i < size; i++)
        shufCards.add(desCards.remove( (int) (Math.random() * desCards.size())));
        
      desCards = shufCards;
    }
  }
  
  public void shuffleMainDeck()
  {
    shuffleDeck(true);
  }
  
  public void shuffleDessertDeck()
  {
    shuffleDeck(false);
  }
  
  public String toString()
  {
    String toReturn = cards.size() + "\n";
    
    for(int i = 0; i < cards.size(); i++)
      toReturn += cards.get(i) + " ";
    
    return toReturn;
  }
}

class Hand
{
  private ArrayList<Card> cards;
  
  public Hand(Card[] cardsDealt)
  {
    cards = new ArrayList<Card>();
    
    for(int i = 0; i < cardsDealt.length; i++)
      cards.add(cardsDealt[i]);
  }
  
  public void drawSelf()
  {
    int size = cards.size();
    
    for(int i = 0; i < size; i++)
      cards.get(i).drawSelf(((1400 - cardSize * size) / 2) + cardSize * i, 450);
  }
  
  public ArrayList<Card> getCards()
  {
    return cards;
  }
  
  public void playCard(Card playedCard)
  {
    cards.remove(playedCard);
  }
  
  public Card searchCard(int type, boolean shouldKeep)
  {
    for(int i = 0; i < cards.size(); i++)
      if(cards.get(i).getTrueType() == type)
      {
        cards.get(i).correct();
        if(shouldKeep)
          return cards.get(i);
        else return cards.remove(i);
      }
        
    return null;
  }
  
  public ArrayList<Integer> getLowIndices()
  {
    ArrayList<Integer> lowIndices = new ArrayList<Integer>();
    
    lowIndices.addAll(getLowIndices(3));
    
    if(info[0] == 1)
      lowIndices.addAll(getLowIndices(6));
    else if(info[0] == 3)
      lowIndices.addAll(getLowIndices(10));
      
    for(int i = 1; i <= 2; i++)
      if(info[1] <= 4)
        lowIndices.addAll(getLowIndices(10 + info[i] * 3));
      
    return lowIndices;
  }
  
  
  private ArrayList<Integer> getLowIndices(int typeMax)
  {
    int max = -1;
    ArrayList<Integer> lowIndices = new ArrayList<Integer>();
    
    for(int i = 0; i < cards.size(); i++)
    {
      int type = cards.get(i).getType();
      
      if(type > max && type <= typeMax && type > typeMax - 3)
        max = type; 
    }
    
    for(int i = cards.size() - 1; i >= 0; i--)
    {
      int type = cards.get(i).getType();
      
      if(type < max && type <= typeMax && type > typeMax - 3)
        lowIndices.add(i);
    } 
    
    return lowIndices;
  }
  
  public String toString()
  {
    String toReturn = "";
    
    for(Card c: cards)
      toReturn += c + " ";
      
    return toReturn;
  }
}

class Menu
{
  private ArrayList<Card> selection;
  private int selectionStage;
  private int rulesStage;
  
  public Menu()
  {
    selection = new ArrayList<Card>();
    
    for(int i = 0; i < 3; i++)
      selection.add(new Card(46 + i));
      
    selectionStage = 1;
    rulesStage = 1;
  }
  
  public void drawSelection(boolean achComp)
  {
    textSize(32);
    fill(255);
    
    if(selectionStage == 1)
    {
      text("Choose Your Rolls", 580, 30);
      fill(128, 128, 128);
      ellipse(1200, 150, 250, 150);
      ellipse(1200, 700, 250, 150);
      
      if(achComp)
      {
        stroke(0, 255, 0);
        strokeWeight(4);
        
        if(timeToBeatJeff != 0)
        {
          stroke(255, 223, 0);
          strokeWeight(6);
        }
        
        ellipse(200, 700, 250, 150);
        strokeWeight(1);
        stroke(0);
      }
      else ellipse(200, 700, 250, 150);
       
      fill(255);
      text("Randomize All", 1104, 160);
      text("Instructions", 1120, 710);
      text("Achievements", 108, 710);
    }
    else if(selectionStage <= 3)
      text("Choose Your Specials", 558, 30);
    else if(selectionStage <= 6)
      text("Choose Your Appetizers", 543, 30);
    else if(selectionStage == 7)
      text("Choose Your Dessert", 563, 30);
    else
    {
      text("Choose Difficulty", 588, 30);
      fill(128, 128, 128);
      
      if(achievements[23])
      {
        ellipse(230, 400, 250, 150);
        ellipse(700, 400, 250, 150);
        ellipse(1170, 400, 250, 150);
      }
      else
      {
        if(foodsCompleted[22])
        {
          stroke(0, 255, 0);
          strokeWeight(4);
          ellipse(230, 400, 250, 150);
          strokeWeight(1);
          stroke(0);
        }
        else ellipse(230, 400, 250, 150);
      
        if(foodsCompleted[23])
        {
          stroke(0, 255, 0);
          strokeWeight(4);
          ellipse(700, 400, 250, 150);
          strokeWeight(1);
          stroke(0);
        }
        else ellipse(700, 400, 250, 150);
      
        if(foodsCompleted[24])
        {
          stroke(0, 255, 0);
          strokeWeight(4);
          ellipse(1170, 400, 250, 150);
          strokeWeight(1);
          stroke(0);
        }
        else ellipse(1170, 400, 250, 150);
      }
      
      fill(255, 192, 203);
      text("Easy", 200, 410);
      fill(255);
      text("Normal", 649, 410);
      fill(255, 0, 0);
      text("Hard", 1138, 410);  
    }
 
    if(selectionStage <= 2 || selectionStage == 4 || selectionStage == 7)
    {
      fill(128, 128, 128);
      ellipse(200, 150, 250, 150);
      fill(255);
      text("Randomize", 125, 160);
    }
   
    if(selectionStage <= 7)
    {
      int size = selection.size();
      
      for(int i = 0; i < size; i++)
        selection.get(i).drawSelf(((1400 - 175.0 * size) / 2) + 175.0 * i, 275);
       
      if(!achievements[24])
        for(int i = 0; i < size; i++)
          selection.get(i).drawOutline(((1400 - 175.0 * size) / 2) + 175.0 * i, 275);
    }
  }
  
  public void drawInstructions()
  {
    
    fill(128, 128, 128);
    ellipse(700, 700, 250, 150);
    if(rulesStage != 1)
    {
      fill(128, 128, 128);
      ellipse(230, 700, 250, 150);
      fill(255);
      text("Previous", 171, 710); 
    }
    if(rulesStage != 5)
    {
      fill(128, 128, 128);
      ellipse(1170, 700, 250, 150);
      fill(255);
      text("Next", 1138, 710);
    }
    fill(255);
    textSize(32);
    text("Back", 668, 710);
    
    if(rulesStage == 5)
    {
      fill(255, 255, 0);
      text("Chopsticks use: click on chopsticks from your played cards, then play two cards from hand", 100, 202);
      
      text("Spoon use: click on spoon from your played cards, then play card, then press view spoon button,", 59, 252); 
      text("then select your request. To request a general type of a card, click on the big version,", 139, 292);
      text("to request a specific subtype, click on that subtype", 364, 332);
      
      text("Menu use: play menu from hand, then play one of four cards shown on screen", 136, 382);
      
      text("Takeout box use: play takeout box from hand, then click on played cards", 218.375, 432); 
      text("you want to turn over, then click on takeout box", 381, 472); 
      
      fill(255, 192, 203);
      text("To play/request a special order, you must first specify the card you'd like", 218, 522);
      text("to copy by clicking on it from your played cards", 387, 562);
      
      fill(255);
      text("Notes: ", 658, 30);
      text("You play against three computers: your cards are shown in bottom left,", 230, 112); 
      text("cpu 1 in top left, cpu 2 in top right, cpu 3 in bottom right", 329, 152);
      
    } 
    else for(int i = 1 + (rulesStage - 1) * 4; i <= 4 + (rulesStage - 1) * 4; i++)
    {
      PImage rules = loadImage("rules" + i + ".png");
      rules.resize(350, 600);
      image(rules, 350 * ((i - 1) % 4), 0);
      if(i == 1)
      {
        fill(0);
        rect(0, 0, 10, 600);
      }
    }
  }
  
  public void drawAchievements(boolean achComp)
  {
    textSize(32);
    fill(128, 128, 128);
    ellipse(1220, 243, 250, 150);
    ellipse(1220, 557, 250, 150);
 
    if(!achComp)
    {
      fill(255);
      text("? ? ?", 1195, 567);
    }
    else 
    {
      fill(46, 26, 71);
      text("Toxic", 1185, 567);
      
      if(timeToBeatJeff != 0)
      {
        String[] hmsString = new String[3];
        
        for(int i = 0; i < 3; i++)
        {
          if(hms[i] < 10)
            hmsString[i] = "0" + hms[i];
          else hmsString[i] = "" + hms[i];
        }
        
        fill(255, 223, 0);
        text(hmsString[0] + " h " + hmsString[1] + " m " + hmsString[2] + " s", 1128, 675);
  
        PImage sushiking = loadImage("sushiking.jpg");
        sushiking.resize(111, 83);
        image(sushiking, 1165, 390);
      }
    }
    
    fill(255); 
    text("Back", 1188, 253);
    
    textSize(23);
    text("Modest Maki: Get 2nd place for maki in all 3 rounds of a game", 100, 25);
    text("Long Term Player: Score 18 points from temaki/pudding in a game", 100, 57);
    text("Speed Eater: Score from uramaki within the first 2 cards played in all 3 rounds of a game", 100, 89);
    text("Fork Forgetter: Use chopsticks at least 4 times in a game", 100, 121);
    text("Sushi Thief: Request successfully with a spoon at least 4 times in a game, without requesting unsuccessfully", 100, 153);
    text("Demanding Customer: Use menu at least 4 times in a game", 100, 185);
    text("Leftover Lover: Use takeout box to takeout at least one item at least 4 times in a game", 100, 217);
    text("Wasabi Warrior: Score at least 40 points from wasabi/nigiri combos in a game", 100, 249);
    text("Tea Time!: Score at least 6 points from a single tea card", 100, 281);
    text("Soyauce Savant: Score at least 12 points from soysauce in a round", 100, 313);
    text("Going for Seconds: Use special order on the same card 3 times in a round", 100, 345);
    text("Dumpling Disciple: Score 45 points from dumpling in a game", 100, 377);
    text("Tempura Titan: Score at least 15 points from tempura in a round", 100, 409);
    text("Sashimi Sensei: Score at least 20 points from sashimi in a round", 100, 441);
    text("Miso Master: Play miso at least 6 times in a game without failing ", 100, 473);
    text("Edamame Expert: Score at least 15 points from edamame in a round", 100, 505);
    text("An Unlikely Friendship: Score 39 points from tofu/eel in a game", 100, 537);
    text("Onigiri Guru: Score a complete set of onigiri in all 3 rounds of a game", 100, 569);
    text("Green Tea Eight Cream: Score at least 24 points from green tea ice cream in a game", 100, 601);
    text("Fruit Fiend: Score 30 points from fruit in a game", 100, 633);
    text("Sushi Low: Score less than 0 points in a game", 100, 665);
    text("Flash of Brilliance: Score at least 30 points in a round and place last in the game", 100, 697);
    text("Head Chef: Score at least 80 points in a game", 100, 729);
    text("Seasoned Competitor: Win on easy, normal, and hard difficulty", 100, 761);
    text("Mature Palate: Win with every card on hard difficulty", 100, 793);
    
    for(int i = 0; i < 25; i++)
    {
      fill(128, 128, 128);
      
      if(achievements[i])
        fill(0, 255, 0);
        
      rect(10, 32 * i, 80, 32);
    }
  }
  
  public void drawDeckPreview(int[] info)
  {
    textSize(32);
    fill(255);
    text("Today's Selection", 583, 30);
    
    if(info[7] == 1)
      text("Easy Difficulty", 605, 785);
    else if(info[7] == 2)
      text("Normal Difficulty", 588, 785);
    else if(info[7] == 3)
      text("Hard Difficulty", 603, 785);
    else text("Face off against jeff(top right) and his minions jacob(top left) and jerry(bottom right)", 143, 785);
   
    new Card(68).drawSelf(140, 100);
    new Card(info[0] + 45).drawSelf(455, 100);
    new Card(info[1] + 48).drawSelf(770, 100);
    new Card(info[2] + 48).drawSelf(1085, 100);
    new Card(info[3] + 56).drawSelf(140, 490);
    new Card(info[4] + 56).drawSelf(455, 490);
    new Card(info[5] + 56).drawSelf(770, 490);
    new Card(info[6] + 64).drawSelf(1085, 490);
    
    fill(128, 128, 128);
    ellipse(700, 420, 250, 150);
    fill(255);
    text("Start Game", 625, 430);
  }
  
  public void drawSpoonButton(boolean viewingSpoon)
  { 
    textSize(32);
    fill(128, 128, 128);
    ellipse(700, 160, 250, 150);
    fill(255);
    
    if(viewingSpoon)
      text("View Game", 625, 170);
    else text("View Spoon", 623, 170);
  }
  
  public void drawSpoon(int[] info)
  { 
    new Card(68).drawSelf(0, 0);
    
    for(int i = 0; i < 3; i++)
      new Card(3 - i).drawSelf(175 + cardSize * i, 0);
    
    new Card(45 + info[0]).drawSelf(0, 275);
    
    if(info[0] == 1)
      for(int i = 0; i < 3; i++)
        new Card(6 - i).drawSelf(175 + cardSize * i, 320);
    else if(info[0] == 3)
      for(int i = 0; i < 3; i++)
        new Card(10 - i).drawSelf(175 + cardSize * i, 320);
      
    new Card(64 + info[6]).drawSelf(0, 550);
    
    if(info[6] == 3)
    {
      for(int i = 0; i < 3; i++)
        new Card(40 + i).drawSelf(175 + cardSize * i, 480);
      for(int i = 0; i < 3; i++)
        new Card(43 + i).drawSelf(175 + cardSize * i, 640);
    }
 
    fill(255);
    text("Spoon Menu", 618, 30);
    new Card(48 + info[1]).drawSelf(613, 275);
    new Card(48 + info[2]).drawSelf(613, 550);
    
    if(info[1] <= 4)
      for(int k = 0; k < 3; k++)
        new Card(8 + info[1] * 3 + k).drawSelf(788 + cardSize * k, 320);
        
    if(info[2] <= 4)
      for(int k = 0; k < 3; k++)
        new Card(8 + info[2] * 3 + k).drawSelf(788 + cardSize * k, 640);
    
    new Card(56 + info[3]).drawSelf(1225, 0);
    new Card(56 + info[4]).drawSelf(1225, 275);
    new Card(56 + info[5]).drawSelf(1225, 550);
    
    if(info[3] == 8)
      for(int i = 0; i < 4; i++)
        new Card(37 - i).drawSelf(1126 - cardSize * i, 0);
  }
  
  public int getSelectionStage()
  {
    return selectionStage;
  }
  
  public int getRulesStage()
  {
    return rulesStage;
  }
  
  public ArrayList<Card> getSelection()
  {
    return selection;
  }
  
  public boolean isSelected()
  {
    return selectionStage == 9;
  }

  public int getRequested(int[] info, int x, int y)
  {
    if(x <  175)
    {
      if(y < 250)
        return 68;
      if(y > 275 && y < 525)
      {
        if(info[0] == 2)
          return 7;
          
        return 45 + info[0];
      }    
      if(y > 550)
      {
        if(info[6] == 3)
          return 67;
          
        return 37 + info[6];
      }
    }
    else if(x < 472)
    {
      int index = (x - 175) / ((int) cardSize);
      
      if(y < 160)
        return 3 - index;
        
      if(info[0] != 2 && y > 320 && y < 480)
        return 2 * info[0] + 4 - index;
        
      if(info[6] == 3 && y > 480)
        return (y - 480) / 160 * 3 + 40 + index;     
    }
    else if(x > 613 && x < 788)
    { 
      if(y > 275 && y < 525)
        return 18 + (8 - info[1]) / 4 * 30 + info[1];
      else if(y > 550)
        return 18 + (8 - info[2]) / 4 * 30 + info[2];
    }
    else if(x > 788 && x < 1084.5 && y > 320)
    {
      int index = ((int) (x - 788)) / ((int) cardSize);
      
      if(y < 480 && info[1] <= 4)
        return 8 + info[1] * 3 + index;
        
      if(y > 640 && info[2] <= 4)
        return 8 + info[2] * 3 + index;
    }
    else if(x > 1225)
    {
      if(y < 250)
        if(info[3] == 8)
          return 64;
        else return 26 + info[3];
        
      if(y > 275 && y < 525)
        return 26 + info[4];
        
      if(y > 550)
        return 26 + info[5];
    }
    else if(x > 829 && y < 160 && info[3] == 8)
      return 37 - (1225 - x) / ((int) cardSize);
    
    return -1;
  }
  
  public void moveOn()
  {
    selectionStage++;
    
    if(selectionStage == 2)
    {
      selection = new ArrayList<Card>();
      
      for(int i = 0; i < 8; i ++)
          selection.add(new Card(49 + i));
    }   
    else if(selectionStage == 4) 
    {
      selection = new ArrayList<Card>();
      
      for(int i = 0; i < 8; i++)
          selection.add(new Card(57 + i));
    }
    else if(selectionStage == 7)
    {
      selection = new ArrayList<Card>();
      
      for(int i = 0; i < 3; i++)
        selection.add(new Card(65 + i));
    }
    else if(selectionStage == 8)
      selection = null;
  }
  
  public void shiftRules(boolean pos)
  {
    if(pos)
      rulesStage++;
    else rulesStage--;
  }
}

class Platter
{
  private ArrayList<Card> recent, cards;
  private ArrayList<Float> xCoors, yCoors;
  private boolean scoredUramaki;
  
  public Platter()
  {
    recent = new ArrayList<Card>();
    cards = new ArrayList<Card>();
    xCoors = new ArrayList<Float>();
    yCoors = new ArrayList<Float>();
    scoredUramaki = false;
  }
  
  public void drawSelf(int side)
  {
    textSize(32);
    fill(255);
    
    if(side == 0)
    {
      assignCoors(true);
      for(int i = cards.size() - 1; i >= 0; i--)
        cards.get(i).drawSelf(xCoors.get(i), yCoors.get(i));  
    }
    else if(side == 1)
    {
      assignCoors(true);
      translate(0, -400);
      for(int i = cards.size() - 1; i >= 0; i--)
        cards.get(i).drawSelf(xCoors.get(i), yCoors.get(i));   
      translate(0, 400);
    }
    else if(side == 2)
    {
      assignCoors(false);
      translate(0, -400);
      for(int i = cards.size() - 1; i >= 0; i--)
        cards.get(i).drawSelf(xCoors.get(i), yCoors.get(i));   
      translate(0, 400);
    }
    else 
    {
      assignCoors(false);
      for(int i = cards.size() - 1; i >= 0; i--)
        cards.get(i).drawSelf(xCoors.get(i), yCoors.get(i)); 
    }  
  }
  
  public void drawSelf(Card tpd, Card otpd, Hand selection, boolean isCho, boolean isSpo, boolean isMen, boolean isTO, int priority, int[] info, int overSpecial)
  {
    drawSelf(0);
    
    if(tpd != null && (selection.searchCard(26, true) != null || (isSpo && (info[1] == 8 || info[2] == 8))))
      for(int i = cards.size() - 1; i >= 0; i--)
        if(cards.get(i).equals(tpd))
        {      
          stroke(255, 192, 203);
          
          if((tpd.getColor().equals("sky") || tpd.getColor().equals("gray")))
          {
            if(cardsLeft > 1 && !isCho && !isSpo && (oldTapped == null || !(oldTapped.getColor().equals("sky") || oldTapped.getColor().equals("gray")) || oldTapped.getType() == tapped.getType()))
            {
              if(overSpecial == 0)
                cards.get(i).drawMixOutline(xCoors.get(i), yCoors.get(i));
              else if(overSpecial == -1)
                stroke(255, 255, 0); 
                
              if(overSpecial != 0)
                cards.get(i).drawOutline(xCoors.get(i), yCoors.get(i));         
            }
            else if(!(isCho && tpd.getType() == 10 + priority) && !(isSpo && tpd.getType() == 10 + priority))
            {
              stroke(255, 192, 203);
              cards.get(i).drawOutline(xCoors.get(i), yCoors.get(i));  
            }
          }
          else 
          {
            stroke(255, 192, 203);
            cards.get(i).drawOutline(xCoors.get(i), yCoors.get(i));
          }
        }
          
    for(int i = cards.size() - 1; i >= 0; i--)
      if((isCho || isSpo || isMen || isTO) && cards.get(i).getType() == 10 + priority)
      {
        stroke(255, 255, 0);
        cards.get(i).drawOutline(xCoors.get(i), yCoors.get(i));
        break;
      }
      
    if(cardsLeft > 1 && tpd != null && (tpd.getColor().equals("sky") || tpd.getColor().equals("gray")) && !isCho && !isSpo && !isMen && !isTO && (selection.searchCard(26, true) == null))
      for(int i = cards.size() - 1; i >= 0; i--)
        if(cards.get(i).equals(tpd))
        {
          stroke(255, 255, 0);
          cards.get(i).drawOutline(xCoors.get(i), yCoors.get(i));
        }
          
    if(cardsLeft > 1 && otpd != null && tpd != null && otpd.getType() != tpd.getType() && selection.searchCard(26, true) != null && (otpd.getColor().equals("sky") || otpd.getColor().equals("gray")) && !isCho && !isSpo && !isMen && !isTO)
      for(int i = cards.size() - 1; i >= 0; i--)
      if(cards.get(i).equals(otpd))
        {
          stroke(255, 255, 0);
          cards.get(i).drawOutline(xCoors.get(i), yCoors.get(i));
        }
          
    stroke(0);
  }
  
  public void highlightSpoon(boolean translate, int priority)
  {
    for(int i = cards.size() - 1; i >= 0; i--)
      if(cards.get(i).getType() == 10 + priority)
      {
        stroke(255, 0, 0);
        
        if(translate)
          translate(0, -400);
          
        cards.get(i).drawOutline(xCoors.get(i), yCoors.get(i));
        
        if(translate)
          translate(0, 400);
        
        stroke(0);
        return;
      }
  }
  
  private int countRolls(boolean maki)
  {
    int count = 0;
    
    if(maki)
      for(int i = 0; i < cards.size(); i++)
      {
        int type = cards.get(i).getType();
        
        if(type >= 4 && type <= 6)
          count += type - 3;
      }    
    else for(int i = 0; i < cards.size(); i++)
    {
      int type = cards.get(i).getType();
        
      if(type >= 8 && type <= 10)
        count += type - 5;
    }    
    
    return count;
  }
  
  public int countMaki()
  {
    return countRolls(true);
  }
  
  public int countUramaki()
  {
    return countRolls(false);
  }
  
  public int countNormal(int t)
  {
    int count = 0;
    
    for(Card c : cards)
      if(c.getType() == t)
        count++;
    
    return count;
  }
  
  public int scoreSelf(int[] info, ArrayList<Player> opps)
  { 
    int score = 0;
    
    score += scoreNigiri();
    
    if(info[0] == 1)
      score += scoreMaki(opps);
    else if(info[0] == 2)
      score += scoreTemaki(opps);
    else score += scoreUramaki(opps);
    
    if(info[1] == 4 || info[2] == 4)
      score += scoreLeftovers();
    if(info[1] == 5 || info[2] == 5)
      score += scoreTea();
    if(info[1] == 7 || info[2] == 7)
      score += scoreSoysauce(opps);
    
    if(info[3] == 1 || info[4] == 1 || info[5] == 1)
      score += scoreDumpling();
    if(info[3] == 2 || info[4] == 2 || info[5] == 2)
      score += scoreTempura();
    if(info[3] == 3 || info[4] == 3 || info[5] == 3)
      score += scoreSashimi();
    if(info[3] == 4 || info[4] == 4 || info[5] == 4)
      score += scoreMiso();
    if(info[3] == 5 || info[4] == 5 || info[5] == 5)
      score += scoreEdamame(opps);
    if(info[3] == 6 || info[4] == 6 || info[5] == 6)
      score += scoreEel();
    if(info[3] == 7 || info[4] == 7 || info[5] == 7)
      score += scoreTofu();
    if(info[3] == 8)
      score += scoreOnigiri();
      
    return score;
  }
  
  public float getExpectedVal(int type, int dc, int[] fruit, ArrayList<Player> opps, int rn, boolean fromMenu, boolean fromTOB, boolean fromSpoon)
  {
    if(type <= 3 || type == 68)
      return getExpectedNigiri(type, fromSpoon);
    if(type <= 6 || type == 46)
      return getExpectedMaki(opps, type, fromTOB, fromSpoon);
    if(type == 7)
      return getExpectedTemaki(opps, fromTOB, fromSpoon);
    if(type <= 10)
      return getExpectedUramaki(opps, type, fromTOB, fromSpoon);
    if(type <= 13 || type == 49)
      return getExpectedChopsticks(fromSpoon);
    if(type <= 16 || type == 50)
      return getExpectedSpoon(fromSpoon);
    if(type <= 19 || type == 51)
      return getExpectedMenu(fromMenu, fromSpoon);
    if(type <= 22 || type == 52)
      return getExpectedTOB(dc, fruit, opps, rn, fromSpoon);
    if(type == 23)
      return getExpectedTea(fromSpoon);
    if(type == 24)
      return getExpectedWasabi(fromTOB, fromSpoon);
    if(type == 25)
      return getExpectedSoysauce(opps, fromSpoon);
    if(type == 26)
      return getExpectedSpecialOrder(dc, fruit, opps, rn, fromSpoon);
    if(type == 27)
      return getExpectedDumpling(fromTOB, fromSpoon);
    if(type == 28)
      return getExpectedTempura(fromTOB, fromSpoon);
    if(type == 29)
      return getExpectedSashimi(fromTOB, fromSpoon);
    if(type == 30)
      return getExpectedMiso(opps, fromSpoon);
    if(type == 31)
      return getExpectedEdamame(opps, fromTOB, fromSpoon);
    if(type == 32)
      return getExpectedEel(fromTOB, fromSpoon);
    if(type == 33)
      return getExpectedTofu(fromTOB, fromSpoon);
    if(type <= 37)
      return getExpectedOnigiri(type, fromTOB, fromSpoon);
    if(type == 38)
      return getExpectedPudding(dc, opps, rn, fromTOB, fromSpoon);
    if(type == 39)
      return getExpectedGTIC(dc, rn, fromTOB, fromSpoon);
    return getExpectedFruit(fruit, type, fromTOB, fromSpoon);        
  }
  
  public ArrayList<Card> getCards()
  {
    return cards;
  }
  
  private ArrayList<Integer> getRecentTypes(boolean isTrue)
  {
    ArrayList<Integer> toReturn = new ArrayList<Integer>();
    
    for(Card c : recent)
      if(isTrue)
        toReturn.add(c.getTrueType());
      else toReturn.add(c.getType());
      
    return toReturn;
  }
  
  public ArrayList<Integer> getRecentTrueTypes()
  {
    return getRecentTypes(true);
  }
  
  public ArrayList<Integer> getRecentTypes()
  {
    return getRecentTypes(false);
  }
  
  public int getCols()
  {
    int count = 0;
    ArrayList<String> usedCols = new ArrayList<String>();
    
    for(Card c: cards)
      if(!usedCols.contains(c.getColor()) && !c.getColor().equals("gw"))
      {
        count++;
        usedCols.add(c.getColor());
      }
      
    return count;
  }
  
  private int getSharedColors(int index)
  {
    int shared = 0;
    
    for(int i = 0; i < index; i++)
      if(cards.get(i).getColor().equals(cards.get(index).getColor()))
        shared++;
    
    return shared;
  }
  
  private int findSlot(int index)
  {
    int slot = 0; 
    
    for(int i = 0; i < index; i++)
    {
      if(cards.get(i).getColor().equals(cards.get(index).getColor()))
        return slot;
      else if(getSharedColors(i) == 0)
        slot++;
    }
    
    return slot;
  }
  
  public boolean wasScored()
  {
    return scoredUramaki;
  }
  
  public void resetScored()
  {
    scoredUramaki = false;
  }
  
  public void resetRecent()
  {
    recent = new ArrayList<Card>(); 
  }
  
  public void emptyPlate()
  {
    resetRecent();
    cards = new ArrayList<Card>();
  }
  
  public void addFood(Card yum)
  {
    xCoors.add(0f);
    yCoors.add(0f);  
    
    if(yum.getType() == 5)
    {
      addInOrderOne(getFirstLoc(4), yum);
      return;
    }
    else if(yum.getType() == 6)
    {
      addInOrderTwo(getFirstLoc(5), yum);
      return;
    }
    else if(yum.getType() == 9)
    {
      addInOrderOne(getFirstLoc(8), yum); 
      return;
    }
    else if(yum.getType() == 10)
    {
      addInOrderTwo(getFirstLoc(9), yum);
      return;
    }
    
    recent.add(yum);
    cards.add(yum);
  }
  
  private void addInOrderOne(int oneIndex, Card yum)
  {
    if(oneIndex == -1)
        cards.add(yum);
    else cards.add(oneIndex, yum);
  }
  
  private void addInOrderTwo(int twoIndex, Card yum)
  {
    if(twoIndex != -1)
      cards.add(twoIndex, yum);
    else if(yum.getColor().equals("r"))
      addInOrderOne(getFirstLoc(4), yum);
    else addInOrderOne(getFirstLoc(8), yum);
  }

  private void assignCoors(boolean firstHalf)
  {
    int uniqueColors = 0;
    
    for(int i = 0; i < cards.size(); i++)
    {
      int shared = getSharedColors(i);
      
      if(shared == 0)
      {      
        if(firstHalf)
          xCoors.set(i, cardSize * uniqueColors);
         else xCoors.set(i, (1400 - cardSize * (uniqueColors + 1)));
        
        yCoors.set(i, 640f);
        uniqueColors++;
      }
      else
      {
        int slot = findSlot(i);
        
        if(firstHalf)
          xCoors.set(i, cardSize * slot);
        else xCoors.set(i, 1400 - cardSize * (slot + 1));

        yCoors.set(i, 640 - 40.0 * shared);
        if(shared == 7)
        {
          for(int k = 0; k < xCoors.size(); k++)
            if(xCoors.get(k).equals(xCoors.get(i)))
              yCoors.set(k, yCoors.get(k) + 120);
        }
        else if(shared == 8)
          for(int k = 0; k < xCoors.size(); k++)
            if(yCoors.get(k).equals(320.0))
              yCoors.set(k, 440.0);
      }
    }
  }
  
  private int nigiri(boolean calculating, boolean wasabiOnly)
  {
    int wasabisActive = 0; 
    int score = 0; 
    int wScore = 0;
    
    for(Card c : cards)
    {
      int t = c.getType();
      
      if(t == 24)
        wasabisActive++;
        
      if(t >= 1 && t <= 3)
        if(wasabisActive > 0)
        {
          score += t * 3;
          wScore += t * 3;
          wasabisActive--;
        }
        else score += t;
    }
    
    if(calculating)
      return wasabisActive;
      
    if(wasabiOnly)
      return wScore;
      
    return score;
  }
  
  private int scoreNigiri()
  {
    return nigiri(false, false);
  }
  
  private int getWasabiPoints()
  {
    return nigiri(false, true);
  }
  
  private float getExpectedNigiri(int type, boolean fromSpoon)
  { 
    float points = type;
    
    if(type == 68)
      points = 1.4;

    if(getWasabisActive() >= 1)
      if(type == 1 && cardsLeft > 4)
        points = 2.5 + .1 * (9 - cardsLeft);
      else points *= 3;
    
    if(!fromSpoon)
      return points;  
    return points * getProbability(type, 3);
  }
  
  private int scoreMaki(ArrayList<Player> opps, int makiCount)
  {
    if(makiCount == 0)
      return 0;
      
    int points = 6;
    
    ArrayList<Integer> makiCounts = new ArrayList<Integer>();
    
    for(Player o: opps)
    {
      int omc = o.getPlatter().countMaki();
      
      if(!makiCounts.contains(omc))
        makiCounts.add(omc);
    }
    
    for(int omc : makiCounts)
    {
      if(makiCount < omc)
        points -= 3;
        
      if(points == 0)
        return 0;
    }
    
    return points;
  }
  
  private int scoreMaki(ArrayList<Player> opps)
  {
    return scoreMaki(opps, countMaki());
  }
  
  private float getExpectedMaki(ArrayList<Player> opps, int type, boolean fromTOB, boolean fromSpoon)
  {
    int icons = type - 3;
    
    if(fromTOB)
      return icons * cardsLeft / 9.0 + (scoreMaki(opps) - scoreMaki(opps, countMaki() - icons)) * (9 - cardsLeft) / 9.0;
      
    float points = icons * cardsLeft / 9.0 + (scoreMaki(opps, countMaki() + icons) - scoreMaki(opps)) * (9 - cardsLeft) / 9.0;
    
    if(!fromSpoon)
      return points;
      
    if(type == 46)
      points = (3 * getExpectedMaki(opps, 4, false, false) + 2 * getExpectedMaki(opps, 5, false, false)) / 5;
      
    return points * getProbability(type, 6);
  }
  
  private int scoreTemaki(ArrayList<Player> opps, int temakiCount)
  {
    int points = 0;
    boolean flagMost = false;
    boolean flagLeast = false;
    
    for(Player o: opps)
    {
       if(!flagMost && temakiCount < o.getPlatter().countNormal(7))
       {
         points -= 4;
         flagMost = true;
       } 
       
       if(!flagLeast && temakiCount > o.getPlatter().countNormal(7))
       {
         points += 4;
         flagLeast = true;
       }  
    }
    
    return points;
  }
  
  private int scoreTemaki(ArrayList<Player> opps)
  {
    return scoreTemaki(opps, countNormal(7));
  }
  
  private float getExpectedTemaki(ArrayList<Player> opps, boolean fromTOB, boolean fromSpoon)
  {
    if(fromTOB)
      return 2.5 * cardsLeft / 9.0 + (scoreTemaki(opps) - scoreTemaki(opps, countNormal(7) - 1)) * (9 - cardsLeft) / 9.0;
      
    float points = 2.5 * cardsLeft / 9.0 + (scoreTemaki(opps, countNormal(7) + 1) - scoreTemaki(opps)) * (9 - cardsLeft) / 9.0;
    
    if(!fromSpoon)
      return points;
      
    if(cardsLeft >= 6)
      return points * (1 - .05 * (9 - cardsLeft));
      
    return points * (75 - .1 * (5 - cardsLeft));
  }
  
  private int scoreUramaki(ArrayList<Player> opps, int uramakiCount)
  {
    int urplace = getUrplace(opps);
    
    if(urplace > 3)
      return 0;
    
    if(uramakiCount == 0)
      return 0;
      
    for(Player o: opps)
      if(uramakiCount < o.getPlatter().countUramaki())
        return 0;
    
    return 11 - 3 * urplace;
  }
  
  private int scoreUramaki(ArrayList<Player> opps)
  {
    return scoreUramaki(opps, countUramaki());
  }
  
  private float getExpectedUramaki(ArrayList<Player> opps, int type, boolean fromTOB, boolean fromSpoon)
  {
    if(fromSpoon)
      return getExpectedUramaki(opps, type, fromTOB, false) * getProbability(type, 10);
      
    int dec = 0;
    int icons = type - 5;
          
    for(Player p: opps)
      if(p.getPlatter().wasScored())
        dec++;
    
    if(countUramaki() + icons >= 10 && !wasScored() && dec <= 2)
      return 8 - 3 * dec;
          
    if(scoredUramaki)
      dec++;
      
    if(dec > 2)
      return .1;
      
    if(fromTOB)
      return (3.5 - dec - (1 - .25 * dec) * (5 - icons)) * cardsLeft / 9.0 + (scoreUramaki(opps) - scoreUramaki(opps, countUramaki() - icons)) * (9 - cardsLeft) / 9.0;
      
    return (3.5 - dec - (1 - .25 * dec) * (5 - icons)) * cardsLeft / 9.0 + (scoreUramaki(opps, countUramaki() + icons) - scoreUramaki(opps)) * (9 - cardsLeft) / 9.0;
  }
  
  private float getExpectedChopsticks(boolean fromSpoon)
  { 
    if(countNormal(11) > 0 || countNormal(12) > 0 || countNormal(13) > 0 || cardsLeft <= 2)
      return .1;
      
    if(!fromSpoon)
      return cardsLeft / 2.8;
    
    if(cardsLeft >= 3)
      return cardsLeft / 2.8 * (.7 - .05 * (9 - cardsLeft));
      
    return .1;
  }
  
  private float getExpectedSpoon(boolean fromSpoon)
  {
    if(countNormal(14) > 0 || countNormal(15) > 0 || countNormal(16) > 0 || cardsLeft <= 2)
      return .1;
      
    if(!fromSpoon)
      return cardsLeft / 2.65;
      
    return .1;
  }
  
  private float getExpectedMenu(boolean fromMenu, boolean fromSpoon)
  {
    if(fromMenu)
      return 0;
      
    if(!fromSpoon)
      return 2 + .1 * (9 - cardsLeft);
    
    if(cardsLeft >= 7)
      return (2 + .1 * (9 - cardsLeft)) * .75 - .05 * (9 - cardsLeft);
    if(cardsLeft >= 5)
      return (2 + .1 * (9 - cardsLeft)) * .55 - .1 * (6 - cardsLeft);
    if(cardsLeft >= 3)
      return (2 + .1 * (9 - cardsLeft)) * .3 - .15 * (4 - cardsLeft);
      
    return (2 + .1 * (9 - cardsLeft)) * .1 - .05 * (2 - cardsLeft);
  }
  
  private float getExpectedTOB(int desCount, int[] fruit, ArrayList<Player> opps, int rn, boolean fromSpoon)
  {
    float exValTot = 0;
    
    for(int i = 0; i < getCards().size(); i++)
    {
     float exVal = getExpectedVal(getCards().get(i).getType(), desCount, fruit, opps, rn, false, true, false);
     
     if(exVal < 2)
       exValTot += 2 - exVal;
    }
    
    if(!fromSpoon)
      if(exValTot == 0)
        return .1;
      else return exValTot;
      
    if(cardsLeft >= 7)
      return exValTot * .75;
      
   return exValTot * .70 - .1 * (6 - cardsLeft);
  }
  
  private float getExpectedWasabi(boolean fromTOB, boolean fromSpoon)
  {
    if(fromTOB)
      return cardsLeft / 1.5;
      
    if(getWasabisActive() >= 1)
      return .1;
      
    if(!fromSpoon)
      return cardsLeft / 2.35;
    return cardsLeft / 2.35 * cardsLeft / 13.5;
  }
  
  
  private int tea(boolean calculating)
  {
    int teaCount = countNormal(23);
    int maxCols = 1;
    
    for(int i = 0; i < cards.size(); i++)
    {
      if(!(cards.get(i).getType() == 69))
      {
        int shared = getSharedColors(i);
      
        if(shared >= maxCols)
          maxCols = shared + 1;
      }
    }
    
    if(calculating)
      return maxCols;
    return teaCount * maxCols;
  }
  
  private int scoreTea()
  {
    return tea(false);
  }
  
  private float getExpectedTea(boolean fromSpoon)
  { 
    if(!fromSpoon)
      return tea(true) + cardsLeft / 3.5;
    return (tea(true) + cardsLeft / 3.5) * cardsLeft / 13.5;
  }
  
  private int scoreSoysauce(ArrayList<Player> opps)
  {
    int cols = getCols();
    
    for(Player o: opps)
      if(cols < o.getPlatter().getCols())
        return 0;
        
    return 4 * countNormal(25);
  }
  
  private float getExpectedSoysauce(ArrayList<Player> opps, boolean fromSpoon)
  {
    int diff = getCols() - getMaxCols(opps);
    float points = 0;
          
    if(diff == -2)
      points = 0.5;
    if(diff == -1)
      points = 1.5;
    if(diff == 0)
      points = 2.5;
    if(diff == 1)
      points = 3.5;
    if(diff > 1)
      points =  4;
    points = .1;
    
    if(!fromSpoon)
      return points;
    return points * cardsLeft / 13.5;
  }
  
  private float getExpectedSpecialOrder(int dc, int[] fruit, ArrayList<Player> opps, int rn, boolean fromSpoon)
  {
    if(!fromSpoon)
     error = true;
     
    float maxExVal = 0;
    
    for(Card c: cards)
      if(!c.getColor().equals("gray"))
      {
        float exVal = getExpectedVal(c.getType(), dc, fruit, opps, rn, false, false, false);
        if(exVal > maxExVal)
        {
          maxExVal = exVal;
          replacementType = c.getType();
        }
      }
      
    return maxExVal;        
  }

  private int dumpling(boolean calculating)
  {
    int count = countNormal(27);
    if(calculating)
      count++;
    
    if(count < 5)
    {
      switch(count)
      {
        case 0: return 0;
        case 1: return 1;
        case 2: return 3;
        case 3: return 6;
      }
      
      return 10;
    }
    else return 15;
  }
  
  private int scoreDumpling()
  {
    return dumpling(false);
  }
  
  private float getExpectedDumpling(boolean fromTOB, boolean fromSpoon)
  {
    if(fromTOB)
      return (countNormal(27) + 1) / 2 + .25 * countNormal(27) * (cardsLeft - 1);
    if(!fromSpoon)
      return dumpling(true) - dumpling(false) + cardsLeft / 4.0;
    return (dumpling(true) - dumpling(false) + cardsLeft / 4.0) * cardsLeft / 9.0;
  }
  
  private int scoreTempura()
  {
    return (countNormal(28) / 2) * 5;
  }
  
  private float getExpectedTempura(boolean fromTOB, boolean fromSpoon)
  {
    if(fromSpoon)
      return getExpectedTempura(false, false) * cardsLeft / 9.0;
      
    boolean evenTempura = countNormal(28) % 2 == 0;
    
    if(fromTOB)
      if(evenTempura)
        return 5  + cardsLeft - 1;
      else return cardsLeft - 1;
    
    if(evenTempura)
        return cardsLeft / 3.5;

    return 5;
  }
  
  private int scoreSashimi()
  {
    return (countNormal(29) / 3) * 10;
  }
  
  private float getExpectedSashimi(boolean fromTOB, boolean fromSpoon)
  {
    if(fromSpoon)
      return getExpectedSashimi(false, false) * cardsLeft / 9.0;
      
    int sashimiCount = countNormal(29) % 3;
    
    if(fromTOB)
    {
      if(sashimiCount == 0)
        return 10;
        
      if(sashimiCount == 1)
        return cardsLeft - 2;
        
      return 1.5 * (cardsLeft - 1);
    }
          
    if(sashimiCount == 0)
    {
      if(cardsLeft > 2)
        return cardsLeft / 2.8;
      return 0.1;
    }
    if(sashimiCount == 1)
      return 3.33 + sashimiCount / 2.8;
      
    return 10;
  }
  
  private int scoreMiso()
  {
    return countNormal(30) * 3;
  }
  
  private float getExpectedMiso(ArrayList<Player> opps, boolean fromSpoon)
  {
    if(getRecentTrueTypes().contains(30))
      return .04;
      
    if(!fromSpoon)
      return 2.4;
      
    for(Player o: opps)
      if(o.getPlatter().getRecentTrueTypes().contains(30))
        return .04;
        
    return 2.4 * cardsLeft / 9.0;
  }
  
  private int scoreEdamame(ArrayList<Player> opps)
  {
    return countNormal(31) * getOWE(opps);
  }
  
  private float getExpectedEdamame(ArrayList<Player> opps, boolean fromTOB, boolean fromSpoon)
  {
     int owe = getOWE(opps); 
          
     if(fromTOB)
       return owe - 0.01 + .51 * (cardsLeft - 1);
       
     if(!fromSpoon)
       return owe + .75 * (opps.size() - owe);
       
     return (owe + .75 * (opps.size() - owe)) * cardsLeft / 9.0;
  }
  
  private int scoreEel()
  {
    int count = countNormal(32);
    
    if(count == 0)
      return 0;
    else if(count == 1)
      return -3;
    else return 7;
  }
  
  private float getExpectedEel(boolean fromTOB, boolean fromSpoon)
  {
    if(fromSpoon)
      return getExpectedEel(false, false) * cardsLeft / 9.0;
      
    int eelCount = countNormal(32);
    
    if(fromTOB)
    {
      if(eelCount > 2)
        return 0.1;
      if(eelCount == 2)
        return 10;
      return cardsLeft - 2;
    }
       
    if(eelCount == 0)
      return cardsLeft / 3.5;
    if(eelCount == 1)
      return 10;
    return 0.1;
  }
  
  private int scoreTofu()
  {
    int count = countNormal(33);
    
    if(count == 1)
      return 2;
    else if(count == 2)
      return 6;
    else return 0;
  }
  
  private float getExpectedTofu(boolean fromTOB, boolean fromSpoon)
  {
    if(fromSpoon)
      return getExpectedTofu(false, false) * cardsLeft / 9.0;
      
    int tofuCount = countNormal(33);
    
    if(fromTOB)
     if(tofuCount > 2)
      return -6;
     else return 2;
          
    if(tofuCount == 0)
      return 2 + cardsLeft / 6;
    if(tofuCount == 1)
      return 4;
    return .02;
  }
  
  private int onigiri(int added)
  {
    int[] ocounts = new int[4];
    int score = 0;
    
    for(int i = 0; i < 4; i++)
    {
      ocounts[i] = countNormal(34 + i);
      if(added == 34 + i)
        ocounts[i]++;
    }
    
    while(ocounts[0] > 0 || ocounts[1] > 0 || ocounts[2] > 0 || ocounts[3] > 0)
    {
      int count = 0;
      
      for(int i = 0; i < 4; i++)
        if(ocounts[i] > 0)
        {
          count++;
          ocounts[i]--;
        }
      
      score += (int) (Math.pow(count, 2));
    } 
    
    return score;
  }
  
  private int scoreOnigiri()
  {
    return onigiri(0);
  }
  
  private float getExpectedOnigiri(int type, boolean fromTOB, boolean fromSpoon)
  {
    if(fromSpoon)
    {
      float sum = 0;
      
      for(int i = 34; i <= 37; i++)
        sum += getExpectedOnigiri(i, false, false);
      
      return sum / 4.0 * cardsLeft / 9.0;
    }
    
    if(fromTOB)
    {
      int greaterThan = 0;
        
      for(int i = 34; i <= 37; i++)
        if(countNormal(type) > countNormal(i))
          greaterThan++;
          
      if(greaterThan < 3)
        return 2;
        
      else return 1 + .25 * (cardsLeft - 1);
    }

    int diff = onigiri(type) - onigiri(0);
          
    if(diff == 1)
    {
      if(onigiri(0) == 0)
        return 1 + cardsLeft / 4.0;
      return 1 + cardsLeft / 15.0;
    }
    if(diff == 3)
    {
      if(scoreOnigiri() == 1 || scoreOnigiri() == 2)
        return 3 + cardsLeft / 4.0;
      return 3 + cardsLeft / 15.0;
    }
    if(diff == 5)
    {
      if(scoreOnigiri() == 4 || scoreOnigiri() == 5 || scoreOnigiri() == 8)
        return 5 + cardsLeft / 4.0;
      return 5 + cardsLeft / 15.0;
    }
    return 7;
  }
  
  private float getExpectedPudding(int dc, ArrayList<Player> opps, int rn, boolean fromTOB, boolean fromSpoon)
  {
    ArrayList<Integer> opcounts = new ArrayList<Integer>();
    
    int currentPCount = dc + countNormal(38);
    if(fromTOB) 
      currentPCount--;
      
    int currentVal = 0;
    
    for(Player o: opps)
      opcounts.add(o.getDesCount() + o.getPlatter().countNormal(38));
      
    java.util.Collections.sort(opcounts);
    
    if(currentPCount == opcounts.get(0))
      currentVal += 6;
      
    if(currentPCount + 1 == opcounts.get(opcounts.size() - 1))
      currentVal += 6;
      
    int trueCardsLeft = cardsLeft + (3 - rn) * 9;

    float points =  3 * trueCardsLeft / 27.0 + currentVal * (27 - trueCardsLeft) / 27.0;
    
    if(!fromSpoon)
      return points;
      
    return points * cardsLeft / 13.5;
  }
  
  private float getExpectedGTIC(int dc, int rn, boolean fromTOB, boolean fromSpoon)
  {
    if(fromSpoon)
      return getExpectedGTIC(dc, rn, false, false) * cardsLeft / 13.5;
      
    int rem = (dc + countNormal(39)) % 4;
    
    if(fromTOB)
    {
      if(rn == 3)
      {
        if(rem == 1)
          return 1;
        if(rem == 2)
          return .5 * (cardsLeft - 1);
        if(rem == 3)
          return cardsLeft - 1;
      }
      
      return 2;
    }
          
    if(rem == 0)
    {
      if(rn == 1)
        return 3;
      if(rn == 2)
        return 1.5;
      return 0.25; 
    }
    if(rem == 1)
    {
      if(rn == 1)
        return 4.5;
      if(rn == 2)
        return 2.75;
      return 0.75;
    }
    else if(rem == 2)
    {
      if(rn == 1)
        return 8;
      if(rn == 2)
        return 5;
      return 2;   
    }
    return 12;
  }
  
  private float getExpectedFruit(int[] fruit, int type, boolean fromTOB, boolean fromSpoon)
  {
    if(fromSpoon)
    {
      float sum = 0;
      
      for(int i = 40; i <= 45; i++)
        sum += getExpectedFruit(fruit, i, false, false);
        
      return sum / 6.0 * cardsLeft / 13.5;
    }
      
    int[] accFruit = new int[3];
    
    int[] counts = new int[6];
    
    for(int i = 40; i <= 45; i++)
      counts[i - 40] = countNormal(i);
    
    accFruit[0] = fruit[0] + 2 * counts[0] + counts[3] + counts[5];
    accFruit[1] = fruit[1] + 2 * counts[1] + counts[3] + counts[4];
    accFruit[2] = fruit[2] + 2 * counts[2] + counts[4] + counts[5];
    
    if(fromTOB)
    {
      if(type < 43)
        return doubleFruit(accFruit[type - 40] - 2);
      if(type == 43)
        return singleFruit(accFruit[0] - 1) + singleFruit(accFruit[1] - 1);
      if(type == 44)
        return singleFruit(accFruit[1] - 1) + singleFruit(accFruit[2] - 1);
      return singleFruit(accFruit[0] - 1) + singleFruit(accFruit[2] - 1);
    }
    
    if(type < 43)
      return doubleFruit(accFruit[type - 40]);
    if(type == 43)
      return singleFruit(accFruit[0]) + singleFruit(accFruit[1]);
    if(type == 44)
      return singleFruit(accFruit[1]) + singleFruit(accFruit[2]);
    return singleFruit(accFruit[0]) + singleFruit(accFruit[2]);
  } 
  
  private int scoreLeftovers()
  {
    return 2 * countNormal(69);
  }
  
  public int getTapped(int x, int y)
  {
    for(int i = 0; i < cards.size(); i++)
    {
      float xDiff = x - xCoors.get(i);
      
      if(xDiff > 0 && xDiff <= cardSize)
      {
        if(yCoors.get(i) == 640f)
        {
          if(y > 640)
            return i;
        }
        else
        {
          float yDiff = y - yCoors.get(i);
          
          if(yDiff > 0 && yDiff <= 40)
            return i;
        } 
      }
    }
    
    return -1;
  }
  
    public int getWasabisActive()
  {
    return nigiri(true, false);
  }
  
  public boolean isActiveWasabi(int wasabiLoc)
  {
    int wasabisActive = getWasabisActive();
    
    for(int i = cards.size() - 1; i > wasabiLoc; i--)
    {
      if(cards.get(i).getType() == 24)
        wasabisActive--;
        
      if(wasabisActive <= 0)
        return false;
    }
    return true;
  }
  
  public int getFirstLoc(int type)
  {
    for(int i = 0; i < cards.size(); i++)
      if(cards.get(i).getType() == type)
        return i;
        
    return -1;
  }
  
  public int getSecondActiveWasabiLoc()
  {
    boolean foundFirst = false;
    
    for(int i = 0; i < cards.size(); i++)
    {
      if(cards.get(i).getType() == 24)
        if(!foundFirst)
          foundFirst = true;
        else return i;
      else if(cards.get(i).getType() <= 3)
        if(foundFirst)
          foundFirst = false;
    }
   
    return -1;
  }
  
  public int getUrplace(ArrayList<Player> opps)
  {
    int urplace = 1;
    
    for(Player o: opps)
      if(o.getPlatter().wasScored())
        urplace++;
        
    if(wasScored())
      urplace++;
        
    return urplace;
  }
  
  public int getSpoonRequestNum(int[] info, int[] spoonTypes, int dc, int[] fruit, ArrayList<Player> opps, int rn)
  {
    if(info[7] == 1)
      while(true)
      {
        int index = (int) (Math.random() * spoonTypes.length);
        
        if(spoonTypes[index] != 0)
          return spoonTypes[index];
      }

    float[] payoffMatrix = generateSpoonPayoffMatrix(spoonTypes, dc, fruit, opps, rn);
    return spoonTypes[getCPUSpoonSelectionIndex(payoffMatrix, info[7])];
  }
  
  private float[] generateSpoonPayoffMatrix(int[] spoonTypes, int dc, int[] fruit, ArrayList<Player> opps, int rn)
  {
    float[] payoffMatrix = new float[12];
    
    for(int i = 0; i < payoffMatrix.length; i++)
      payoffMatrix[i] = getExpectedVal(spoonTypes[i], dc, fruit, opps, rn, false, false, true);
      
    return payoffMatrix;
  }
  
  private int getCPUSpoonSelectionIndex(float[] payoffMatrix, int diff)
  {
    float sum = 0;
    float pow = 1.5 * (diff - 1);
      
    for(int i = 0; i < payoffMatrix.length; i++)
    {
      if(payoffMatrix[i] != 0)
        sum += Math.pow(payoffMatrix[i], pow);
    }
        
    if(sum == 0)
      error = true;
        
    float choice = (float) (Math.random() * sum);
      
    for(int i = 0; i < payoffMatrix.length; i++)
    {
      if(payoffMatrix[i] != 0)
        choice -= Math.pow(payoffMatrix[i], pow);
      if(choice <= 0)
        return i;
    }  
     
    return 0;
  }
  
  private int getMaxCols(ArrayList<Player> opps)
  {
    int maxCols = 0;
          
    for(Player p : opps)
    {
      int cols = p.getPlatter().getCols();
            
      if(cols > maxCols)
        maxCols = cols;
    }
          
    return maxCols;
  }
  
  private int getOWE(ArrayList<Player> opps)
  {
    int owe = 0; 
          
    for(Player p: opps)
      if(p.getPlatter().countNormal(31) >= 1)
        owe++;
        
    return owe;
  }
  
  private int singleFruit(int have)
  {
    if(have == 0 || have == 2)
      return 2;
      
    else if(have == 1)
      return 1;
      
    else if(have == 3)
      return 3;
      
    else if(have == 4)
      return 4;
      
    else return 0;
  }
  
  private int doubleFruit(int have)
  {
    if(have <= 1)
      return 3;
      
    else if(have == 2)
      return 5;
      
    else if(have == 3)
      return 7;
      
    else if(have == 4)
      return 4;
      
    else return 0;
  }
   
  private float getProbability(int type, int typeMax)
  {
    if(type == typeMax)
      if(cardsLeft <= 6)
        return 0;
      else return .9 - .15 * (9 - cardsLeft);
      
    if(type == typeMax - 1)
      if(cardsLeft <= 3 || cardsLeft > 6)
        return 0;
      else return .9 - .1 * (3 - cardsLeft);
      
    if(cardsLeft > 3)
      return 0;
      
    return .9 - .15 * (3 - cardsLeft);
  }
  
  public Card removeSpec(int priority, boolean forRealsies)
  {
    for(int i = cards.size() - 1; i >= 0; i--)
      if(cards.get(i).getType() == 10 + priority)
        if(forRealsies)
        {
          cards.get(i).correct();
          return cards.remove(i);
        }
        else return cards.get(i);
    
    return null;
  }
  
  public Card removeGen(int type)
  {
    for(int i = cards.size() - 1; i >= 0; i--)
      if(cards.get(i).getType() == type)
      {
        cards.get(i).correct();
        return cards.remove(i);
      }
      
    return null;
  }
  
  public Card removeMiso() 
  {  
    for(int i = recent.size() - 1; i >= 0; i--)
      if(recent.get(i).getType() == 30)
        recent.remove(i);

    return removeGen(30);
  }
  
  public ArrayList<Card> removeUramaki()
  {
    ArrayList<Card> removed = new ArrayList<Card>();
    
    for(int i = cards.size() - 1; i >= 0; i--)
      if(cards.get(i).getColor().equals("lime"))
        removed.add(cards.remove(i));
    
    for(int i = recent.size() - 1; i >= 0; i--)
      if(recent.get(i).getColor().equals("lime"))
        recent.remove(i);
    
    scoredUramaki = true;

    return removed;
  }
}

class Player implements Comparable<Player>
{
  private Hand selection;
  private Platter meal;
  private int[] fruit;
  private ArrayList<Integer> specTypes;
  private String name;
  private boolean spochUsed;
  private int score, desCount;

  public Player(String n)
  {
    selection = new Hand(new Card[0]);
    meal = new Platter();
    fruit = new int[3];
    specTypes = new ArrayList<Integer>();
    name = n;
    spochUsed = false;
    score = 0;
    desCount = 0; 
  }
  
  public Player(String n, boolean usePlayPlat)
  {
    this(n);
    if(usePlayPlat)
      meal = new PlayerPlatter();
  }
  
  public String getName()
  {
    return name;
  }
  
  public Hand getHand()
  {
    return selection;
  }
  
  public Platter getPlatter()
  {
    return meal;
  }
  
  public int getScore()
  {
    return score;
  }
  
  public int getDesCount()
  {
    return desCount;
  }
  
  public int getWater()
  {
    return fruit[0];
  }
  
  public int getPine()
  {
    return fruit[1];
  }
  
  public int getOrange()
  {
    return fruit[2];
  }
  
  public int[] getFruit()
  {
    return fruit;
  }
  
  public int getTiebreakOrder()
  {
    if(name.equals("you"))
      return 0;
    if(name.equals("jeff"))
      return 2;
    return 1;
  }
  
  public void addScore(int part)
  {
    score += part;
  }
  
  public void addDes()
  {
    desCount++;
  }
  
  public void addWater()
  {
    fruit[0]++; 
  }
  
  public void addPine()
  {
    fruit[1]++;
  }
  
  public void addOrange()
  {
    fruit[2]++;
  }
  
  public void updateDes(int des)
  {
    if(des < 3)
      desCount += meal.countNormal(37 + des);
    else
    {
      for(int i = 40; i <= 45; i++)
      {
          desCount += meal.countNormal(i);
        
          if(i < 43)
            fruit[i-40] += meal.countNormal(i) * 2;
          else for(int k = 0; k < 3; k++)
            if(!(i == 43 && k == 1) && !(i == 44 && k == 0) && !(i == 45 && k == 2))
              fruit[k] += meal.countNormal(i);
      }
    }
  }
  
  public void pickCard(Card picked)
  {
    if(picked.isDisguised())
    {
      narration.add(name + " copied a(n) " + picked + " with a special order!");
      
      if(name.equals("you"))
        specTypes.add(picked.getType());
    }
    
    if(picked.getType() <= 3 && meal.getWasabisActive() >= 1)
    {
      if(name.equals("you"))
        narration.add(name + " tripled the value of your " + picked + " with a wasabi!"); 
      else narration.add(name + " tripled the value of their " + picked + " with a wasabi!");
      
      if(meal.getWasabisActive() >= 2)
      {
        selection.playCard(picked);
        meal.addFood(picked);
        java.util.Collections.swap(meal.getCards(), meal.getSecondActiveWasabiLoc(), meal.getCards().size() - 1);
        return;
      }
    }
    
    selection.playCard(picked);
    meal.addFood(picked); 
  }
  
  public void returnCard(int i)
  {
    selection.getCards().add(meal.getCards().remove(i));
  }
  
  public void setHand(Hand h)
  {
    selection = h;
  }
  
  public void convertPudding(ArrayList<Player> opps, int roll)
  {
    boolean flagMost = false;
    boolean flagLeast = false;
    
    for(Player o: opps)
    {
      if(!flagMost && desCount < o.getDesCount())
      {
        score -= 6;
        flagMost = true;
      }
      
      if(!flagLeast && desCount > o.getDesCount())
      {
        score += 6;
        flagLeast = true;
      }
    }
    
    if(!achievements[1] && name.equals("you") && !flagMost && flagLeast && roll == 2)
      ((PlayerPlatter) meal).updateLongTermPlayer();  
  }
  
  public void convertGTIC()
  {
    int toAdd = (desCount / 4) * 12;
    
    score += toAdd;
    
    if(name.equals("you") && toAdd >= 24)
      achievements[18] = true;
  }
  
  public void convertFruit()
  {
    int added = 0;
    
    for(int i = 0; i < 3; i++)
    {
      int fruitScore = scoreFruit(fruit[i]);
      score += fruitScore;
      added += fruitScore;
    }
    
    if(name.equals("you") && added == 30)
      achievements[19] = true;
  }
  
  private int scoreFruit(int amt)
  {
    if(amt < 5)
    {
      switch(amt)
      {
        case 0: return -2;
        case 1: return 0;
        case 2: return 1; 
        case 3: return 3;
      }
      
      return 6;
    }    
    else return 10;
  }
  
  public Card selfishCPU(ArrayList<Player> opps, int rn, boolean fromMenu, int diff)
  {
    if(selection.getCards().size() == 1 && selection.getCards().get(0).getType() != 26)
      return selection.getCards().get(0);

    float[] payoffMatrix = generatePayoffMatrix(opps, rn, fromMenu, diff);
    
    return getCPUSelection(payoffMatrix, diff);
  }
  
  public Card randomCPU()
  {
    Card toBePicked = selection.getCards().get((int) (Math.random() * selection.getCards().size()));
    
    if(toBePicked.getType() == 26) 
      if(meal.getCards().size() >= 1)
        toBePicked.setType(meal.getCards().get((int) (Math.random() * meal.getCards().size())).getType());
      else return randomCPU();
    
    return toBePicked;
  }
  
  public Card helperCPU(Player chosen, ArrayList<Player> chosenOpps, int rn)
  {
    return selflessCPU(chosen, chosenOpps, rn, true);
  }
  
  public Card sabotageCPU(Player chosen, ArrayList<Player> chosenOpps, int rn)
  {
    return selflessCPU(chosen, chosenOpps, rn, false);
  }
  
  private void useChop(ArrayList<Player> opps, int priority, int rn, int diff)
  {      
    Card picked = selfishCPU(opps, rn, false, diff);
    narration.add(name + " played a(n) " + new Card(picked.getTrueType()) + " with a chopsticks!");
    pickCard(picked);
    selection.getCards().add(meal.removeSpec(priority, true));
    spochUsed = true;
  }
  
  public void sabChop(Player chosen, ArrayList<Player> chosenOpps, int priority, int rn)
  {
    Card picked = sabotageCPU(chosen, chosenOpps, rn);
    narration.add(name + " played a(n) " + new Card(picked.getTrueType()) + " with a chopsticks!");
    pickCard(picked);
    selection.getCards().add(meal.removeSpec(priority, true));
    spochUsed = true;
  }
  
  public void handleChop(ArrayList<Player> opps, int priority, int rn, int diff)
  {
    if(canSpoCh(priority) && (Math.random() > .5 || selection.getCards().size() == 1))
      useChop(opps, priority, rn, diff);
  }
  
  public void modHandleChop(Player chosen, ArrayList<Player> chosenOpps, int priority, int rn)
  {
    if(canSpoCh(priority) && (Math.random() > .5 || selection.getCards().size() == 1))
      sabChop(chosen, chosenOpps, priority, rn);
  }
  
  public int getCPUSpoonRequestNum(int[] info, int[] spoonTypes, int dc, int[] fruit, ArrayList<Player> opps, int rn)
  {
    spochUsed = true;
    return meal.getSpoonRequestNum(info, spoonTypes, dc, fruit, opps, rn);
  }
  
  public boolean canSpoCh(int priority)
  {
    Card special = meal.removeSpec(priority, false);
    
    if(special != null && !spochUsed && selection.getCards().size() != 0)
      if(special.getTrueType() == 26)
        return !meal.getRecentTypes().contains(10 + priority);
      else return !meal.getRecentTrueTypes().contains(10 + priority);
        
    return false;
  }
  
  private void resetSpoChStatus()
  {
    spochUsed = false;
  }
  
  public void useSpoCh()
  {
    spochUsed = true;
  }
  
  public boolean getSpoChStatus()
  {
    return spochUsed;
  }
  
  public void handleMenu(ArrayList<Player> opps, int priority, ArrayList<Card> discardPile, Deck pantry, int roundNum, int diff)
  { 
    Card result = meal.removeSpec(priority, true);
      
    if(result != null) 
    {
      discardPile.add(result);
                  
      Hand saved = selection;
                  
      Card[] cds = new Card[4];          
      for(int j = 0; j <4; j++)
        cds[j] = pantry.dealCard();
       
      selection = new Hand(cds);   
      Card picked = selfishCPU(opps, roundNum, true, diff);
      narration.add(name + " played a(n) " + new Card(picked.getType()) + " with a menu!");
      pickCard(picked); 
      pantry.getCards().addAll(selection.getCards());
      pantry.shuffleMainDeck();
      setHand(saved);  
    }
  }
  
  public void handleTOB(ArrayList<Player> opps, int priority, ArrayList<Card> discardPile, int roundNum, int diff)
  {
    Card result = meal.removeSpec(priority, true);
      
    if(result != null)
    {
      discardPile.add(result);                 
      useTOB(opps, roundNum, diff == 1);
    }
  }
  
  public void useTOB(ArrayList<Player> opps, int rn, boolean random)
  {
    String turnedOver = "";
    
    for(int i = meal.getCards().size() - 1; i >= 0; i--)
      if(meal.getCards().get(i).getType() == 69);
      else if(!random)
      {
        if(meal.getExpectedVal(meal.getCards().get(i).getType(), desCount, fruit, opps, rn, false, true, false) < 2)
          if((meal.getCards().get(i).getType() != 24 || meal.isActiveWasabi(i)) && meal.getCards().get(i).getType() != 69)
          {
            turnedOver += meal.getCards().get(i) + ", ";
            meal.getCards().get(i).setType(69);
          }
      }
      else if(Math.random() < .5)
      {
        turnedOver += meal.getCards().get(i) + ", ";
        meal.getCards().get(i).setType(69);
      }
        
    if(turnedOver.equals(""))
      narration.add(name + " is not taking out any food with their takeout box.");
    else 
    {
      turnedOver = turnedOver.substring(0, turnedOver.length() - 2);
      narration.add(name + " turned over " + turnedOver + " with a takeout box!");
    }
  }

  private float[] generatePayoffMatrix(ArrayList<Player> opps, int rn, boolean fromMenu, int diff)
  {
    float[] payoffMatrix = new float[selection.getCards().size()];
    ArrayList<Integer> usedTypes = new ArrayList<Integer>();
    ArrayList<Integer> lowIndices = new ArrayList<Integer>();
    
    if(diff != 1)
      lowIndices = selection.getLowIndices();
       
    for(int i = 0; i < selection.getCards().size(); i++)
    {
      if(diff == 1 || !lowIndices.contains(i))
      {
        if(selection.getCards().get(i).getType() == 26 && meal.getCards().size() > 0)
        {
          Hand saved = selection;
          setHand(new Hand(meal.getCards().toArray(new Card[meal.getCards().size()])));
          Card wouldPick = selfishCPU(opps, rn, fromMenu, diff);
          setHand(saved);
          selection.getCards().get(i).setType(wouldPick.getType());
        }
      
        int type = selection.getCards().get(i).getType();
        
        if(type != 26 && !usedTypes.contains(type))
        {
          usedTypes.add(type);
          payoffMatrix[i] = meal.getExpectedVal(selection.getCards().get(i).getType(), desCount, fruit, opps, rn, fromMenu, false, false);
        }
      }
    }
    
    if(diff == 0)
      for(int i = 0; i < payoffMatrix.length; i++)
        if(payoffMatrix[i] != 0)
          payoffMatrix[i] = 1.0/payoffMatrix[i];
    
    return payoffMatrix;
  }
  
  private Card getCPUSelection(float[] payoffMatrix, int diff)
  {   
    float sum = 0;
    float pow = 2.4 + .24 * (9 - cardsLeft);
    
    if(diff == 2)
      pow /= 2;   
    else if(diff == 4 || diff == 0)
      pow *= 2;
      
    for(int i = 0; i < payoffMatrix.length; i++) 
      sum += Math.pow(payoffMatrix[i], pow);
        
    if(sum == 0)
    {
      System.out.println(selection);
      error = true;
    }
        
    float choice = (float) (Math.random() * sum);
      
    for(int i = 0; i < payoffMatrix.length; i++)
    {
      choice -= Math.pow(payoffMatrix[i], pow);
      if(choice <= 0)
        return selection.getCards().get(i);
    }  
     
    return selection.getCards().get(0);
  }
    
  private Card selflessCPU(Player chosen, ArrayList<Player> chosenOpps, int rn, boolean lucky)
  {
    Card toReturn;
    Hand chosenHand = chosen.getHand();
    chosen.setHand(selection);
    if(lucky)
      toReturn = chosen.selfishCPU(chosenOpps, rn, false, 0);
    else toReturn = chosen.selfishCPU(chosenOpps, rn, false, 4);
    chosen.setHand(chosenHand);
    return toReturn;
  }
  
  public void updateGoingForSeconds()
  {
    ArrayList<Integer> first = new ArrayList<Integer>();
    ArrayList<Integer> second = new ArrayList<Integer>();
    
    for(int t : specTypes)
      if(first.contains(t))
        if(second.contains(t))
        {
          achievements[10] = true;
          return;
        }
        else second.add(t);
      else first.add(t);
      
    specTypes = new ArrayList<Integer>();
  }
  
  public int compareTo(Player other)
  {
    if(score > other.score)
      return 2;
    else if(score < other.score)
      return -2;
    else if(desCount > other.desCount)
      return 1;
    else if(desCount < other.desCount)
      return -1;
    else return getTiebreakOrder() - other.getTiebreakOrder();
  }
}

class PlayerPlatter extends Platter
{
  private boolean modestMaki, ltp, dumplingDisciple, onigiriGuru, fob;
  private int wnPoints, misoCounts, tePoints, urPoints;
  
  public PlayerPlatter()
  {
    super();
    modestMaki = true;
    ltp = true;  
    dumplingDisciple = true;
    onigiriGuru = true;
    fob = false;
    wnPoints = 0;
    misoCounts = 0;
    tePoints = 0;
    urPoints = 0;
  }
  
  public int scoreSelf(int[] info, ArrayList<Player> opps)
  { 
    int score = 0;
    
    score += super.scoreNigiri();
    wnPoints += super.getWasabiPoints();
    
    if(info[0] == 1)
    {
      int makiScore = super.scoreMaki(opps);
      
      if(makiScore != 3)
        modestMaki = false;
        
      score += makiScore;
    }
    else if(info[0] == 2)
    {
      int temakiScore = super.scoreTemaki(opps);
      
      if(temakiScore != 4)
        ltp = false;
      
      score += temakiScore;
    }
    else score += super.scoreUramaki(opps);
    
    if(info[1] == 4 || info[2] == 4)
      score += super.scoreLeftovers();
    if(info[1] == 5 || info[2] == 5)
    {
      int teaScore = super.scoreTea();
      int teaCount = super.countNormal(23);
      
      if(teaCount != 0 && teaScore / teaCount >= 6)
        achievements[8] = true;
      
      score += teaScore;
    }
    if(info[1] == 7 || info[2] == 7)
    {
      int soysauceScore = super.scoreSoysauce(opps);
      
      if(soysauceScore >= 12)
        achievements[9] = true;
        
      score += soysauceScore;
    }
    
    if(info[3] == 1 || info[4] == 1 || info[5] == 1)
    {
      int dumplingScore = super.scoreDumpling();
      
      if(dumplingScore != 15)
        dumplingDisciple = false;
        
      score += dumplingScore;
    }
    if(info[3] == 2 || info[4] == 2 || info[5] == 2)
    {
      int tempuraScore = super.scoreTempura();
      
      if(tempuraScore >= 15)
        achievements[12] = true;
        
      score += tempuraScore;
    }
    if(info[3] == 3 || info[4] == 3 || info[5] == 3)
    {
      int sashimiScore = super.scoreSashimi();
      
      if(sashimiScore >= 20)
        achievements[13] = true;
        
      score += sashimiScore;
    }
    if(info[3] == 4 || info[4] == 4 || info[5] == 4)
    {
      int misoScore = super.scoreMiso();
      
      score += misoScore;
      misoCounts += misoScore / 3;
    }
    if(info[3] == 5 || info[4] == 5 || info[5] == 5)
    {
      int edamameScore = super.scoreEdamame(opps);
      
      if(edamameScore >= 15)
        achievements[15] = true;
        
      score += edamameScore;
    }
    if(info[3] == 6 || info[4] == 6 || info[5] == 6)
    {
      int eelScore = super.scoreEel();
      score += eelScore;
      tePoints += eelScore;
    }
    if(info[3] == 7 || info[4] == 7 || info[5] == 7)
    {
      int tofuScore = super.scoreTofu();
      score += tofuScore;
      tePoints += tofuScore;
    }
    if(info[3] == 8)
    {
      score += super.scoreOnigiri();
      
      if(!(super.countNormal(34) >= 1 && super.countNormal(35) >= 1 && super.countNormal(36) >= 1 && super.countNormal(37) >= 1))
        onigiriGuru = false;
    }

    if(score + urPoints >= 30)
      fob = true;
      
    urPoints = 0;
      
    return score;
  }
  
  public void updateModestMaki()
  {
    if(modestMaki)
      achievements[0] = true;
  }
  
  public void updateLongTermPlayer()
  {
    if(ltp)
      achievements[1] = true;
  }
  
  public void updateWasabiWarrior()
  {
    if(wnPoints >= 40)
      achievements[7] = true;
  }
  
  public void updateDumplingDisciple()
  {
    if(dumplingDisciple)
      achievements[11] = true;
  }
  
  public void updateMisoMaster()
  {
    if(misoCounts >= 6)
      achievements[14] = true;
  }
  
  public void updateUnlikelyFriendship()
  {
    if(tePoints == 39)
      achievements[16] = true;
  }
  
  public void updateOnigiriGuru()
  {
    if(onigiriGuru)
      achievements[17] = true;
  }
  
  public void updateFlashOfBrilliance()
  {
    if(fob) 
      achievements[21] = true;
  }
  
  public void setUrPoints(int urp)
  {
    urPoints = urp;
  }
}

class Restaurant
{
  private Player[] party;
  private Deck pantry;
  private int[] info, spoonTypes;
  private ArrayList<Card> discardPile;
  private boolean displayFinal, misoAllowed, spoonFail, misoFail;
  private int roundNum, speedEats, chopCounts, spoonSuccesses, menuCounts;

  public Restaurant(int partySize, int[] information, boolean achComp)
  {
    info = information; 
    party = new Player[partySize];
    party[0] = new Player("you", !achComp);
    if(info[7] == 4)
    {
      party[1] = new Player("jacob");
      party[2] = new Player("jeff");
      party[3] = new Player("jerry");
    }
    else for(int i = 1; i < partySize; i++)
      party[i] = new Player("cpu " + i);
      
    pantry = new Deck(info);
    dealCards(); 
    if(info[1] == 2 || info[2] == 2)
      spoonTypes = generateSpoonTypes();
      
    discardPile = new ArrayList<Card>();
    displayFinal = false;
    misoAllowed= true;
    spoonFail = false;
    misoFail = false; 
    roundNum = 1; 
    speedEats = 0;
    chopCounts = 0;
    spoonSuccesses = 0;
    menuCounts = 0;
  }
  
  private void dealCards()
  {
    for(int i = 0; i < party.length; i++)
    {
      Card[] dealtCards = new Card[9];
      
      for(int k = 0; k < 9; k++)
        dealtCards[k] = pantry.dealCard();
        
      party[i].setHand(new Hand(dealtCards));
    }
    
    cardsLeft = 9;
  }
  
  public void drawSelf(Card tpd, Card otpd, Hand selection, boolean isCho, boolean isSpo, boolean isMen, boolean isTO, int priority, int xLoc, int yLoc)
  {
    for(int i = 1; i < party.length; i++)
        party[i].getPlatter().drawSelf(i);
    
    party[0].getPlatter().drawSelf(tpd, otpd, selection, isCho, isSpo, isMen, isTO, priority, info, hoveringSO(xLoc, yLoc)); 
    party[0].getHand().drawSelf();
    
    if(!displayFinal)
      drawStandard();
    else if(timeToBeatJeff == 0 || millis() - timeToBeatJeff <= 5000 || millis() - timeToBeatJeff > 11000)
      drawFinal();
    else if(millis() - timeToBeatJeff <= 10000)
      drawSushiKing();
  }
  
  public Player[] getParty()
  {
    return party;
  }
  
  public Deck getDeck()
  {
    return pantry;
  }
  
  public int getRoundNum()
  {
    return roundNum;
  }
  
  public ArrayList<Card> getDP()
  {
    return discardPile;
  }
  
  public int[] getInfo()
  {
    return info;
  }
  
  private Player[] getPlaces()
  {
    ArrayList<Player> unsorted = new ArrayList<Player>();
    for(int i = 0; i < 4; i++)
      unsorted.add(party[i]);
      
    java.util.Collections.sort(unsorted);
    
   return unsorted.toArray(new Player[4]);
  }
  
  public ArrayList<Player> getOpps(int index)
  {
    ArrayList<Player> opps = new ArrayList<Player>();
    
    for(int i = 0; i < party.length; i++)
      if(i != index)
        opps.add(party[i]);
        
    return opps;
  }

  public void allowMiso()
  {
    misoAllowed = true;
  }
  
  private void sortPlayers()
  {
    party = getPlaces();
  }
  
  public void playPlayer(Card humanPlayed)
  {
    party[0].pickCard(humanPlayed);
  }
  
  public void playComputers()
  {
    if(info[7] == 1)
    {
      for(int i = 1; i < party.length; i++)
        party[i].pickCard(party[i].randomCPU());
        
      return;
    }
    for(int i = 1; i < party.length; i++)
      if(info[7] == 4 && i == 1)
        party[i].pickCard(party[i].helperCPU(party[2], getOpps(2), roundNum));
      else if(info[7] == 4 && i == 3)
        party[i].pickCard(party[i].sabotageCPU(party[0], getOpps(0), roundNum));
      else party[i].pickCard(party[i].selfishCPU(getOpps(i), roundNum, false, info[7]));   
  }
  
  public void playTurn(Card humanPlayed)
  { 
    playComputers();
    playPlayer(humanPlayed);

    if(info[3] == 4 || info[4] == 4 || info[5] == 4)
      checkMiso();  
  }
  
  public void chopComputers(int priority)
  {
    for(int i = 1; i < party.length; i++)
      if(party[i].getName().equals("jerry"))
        party[i].modHandleChop(party[0], getOpps(0), priority, roundNum);
      else if(!party[i].getName().equals("jacob"))  
        party[i].handleChop(getOpps(i), priority, roundNum, info[7]);
  }
  
  public void chopHuman(int priority, Card clicked)
  {
    party[0].getHand().getCards().add(sogo.getParty()[0].getPlatter().removeSpec(priority, true));
    narration.add("you played a(n) " + new Card (clicked.getTrueType()) + " with a chopsticks!");
    playPlayer(clicked);
    chopCounts++;
    party[0].useSpoCh();
  }
  
  public int[] spoonComputers(int priority)
  { 
    int[] toReturn = new int[]{-1, -1};
    
    for(int i = 1; i < party.length; i++)
      if(party[i].canSpoCh(priority) && (Math.random() > .30 || party[i].getHand().getCards().size() == 1))
      {  
        toReturn[0] = party[i].getCPUSpoonRequestNum(info, spoonTypes, party[i].getDesCount(), party[i].getFruit(), getOpps(i), roundNum);
        
        if(CPUSpoonRequest(toReturn[0], i, priority))
          toReturn[1] = i;
      }
      
    return toReturn;         
  }
  
  public void humanSpoonRequest(int type, int priority)
  {
    narration.add("you are requesting a(n) " + new Card(type) + ".");
    for(int i = 1; i < party.length; i++)
      if(spoonRequest(type, 0, i, priority, false))
      {
        spoonSuccesses++;
        return;
      }
    
    spoonFail = true;
    discardPile.add(party[0].getPlatter().removeSpec(priority, true));
    party[0].useSpoCh();
  }
  
  public void humanSpoonAnswer(int priority, Card clicked, int rIndex)
  {
    party[0].getHand().getCards().add(sogo.getParty()[rIndex].getPlatter().removeSpec(priority, true));
    party[0].getHand().getCards().remove(clicked);
    if(clicked.getType() == 26)
      clicked.setType(replacementType);
    party[rIndex].getPlatter().addFood(clicked);
    narration.add("you gave a(n) " + clicked + " to " + party[rIndex].getName() + ".");
  }
  
  public void menuComputers(int priority)
  {
    for(int i = 1; i < party.length; i++)
      party[i].handleMenu(getOpps(i), priority, discardPile, pantry, roundNum, info[7]);
  }
  
  public void menuHuman(int priority, Card clicked, Hand saved)
  {
    narration.add("you played a(n) " + new Card(clicked.getTrueType()) + " with a menu!");
    discardPile.add(sogo.getParty()[0].getPlatter().removeSpec(priority, true));
    playPlayer(clicked);
    pantry.getCards().addAll(sogo.getParty()[0].getHand().getCards());
    pantry.shuffleMainDeck();
    party[0].setHand(saved);
    menuCounts++;
  }
  
  public void TOBComputers(int priority)
  {
    for(int i = 1; i < party.length; i++)      
      party[i].handleTOB(getOpps(i), priority, discardPile, roundNum, info[7]);
  }

  public void scoreUramaki()
  {
    ArrayList<Player> qualed = new ArrayList<Player>();
     
    for(int i = 0; i < party.length; i++)
      if(party[i].getPlatter().countUramaki() >= 10 && !party[i].getPlatter().wasScored())
        qualed.add(party[i]);
    
    while(qualed.size() > 0)
    {
      int max = getMaxUramaki(qualed);
      int size = qualed.size();
      int urplace = getUrplace();
      
      for(int i = size - 1; i >= 0; i--)
      {
        if(qualed.get(i).getPlatter().countUramaki() == max)
        {
          if(urplace == 1)
          {
            handleUramakiScore(qualed.get(i), 8);
            
            if(qualed.get(i).getName().equals("you"))
            {
              if(cardsLeft > 7)
                speedEats++;
              
              if(!achievements[21])
                ((PlayerPlatter) qualed.get(i).getPlatter()).setUrPoints(8);
            }
          }  
          else if(urplace == 2)
          {
            handleUramakiScore(qualed.get(i), 5);
            
            if(!achievements[21] && qualed.get(i).getName().equals("you"))
              ((PlayerPlatter) qualed.get(i).getPlatter()).setUrPoints(5);
          }
          else if(urplace == 3)
          {
            handleUramakiScore(qualed.get(i), 2);
            
            if(!achievements[21] && qualed.get(i).getName().equals("you"))
              ((PlayerPlatter) qualed.get(i).getPlatter()).setUrPoints(2);
          }
            
          if(urplace >= 1 && urplace <= 3)
          {
            ArrayList<Card> removed = qualed.get(i).getPlatter().removeUramaki();
            discardPile.addAll(removed);
            qualed.remove(i);
          }          
        }
      }  
    }  
  }
  
  public void checkMiso()
  {
    int misoCount = 0; 
    
    for(Player p: party)
    {
      ArrayList<Integer> rtypes = p.getPlatter().getRecentTypes();
      
      for(int t : rtypes)
        if(t == 30)
          misoCount++;         
    }
    
    if(misoCount >= 2 || !misoAllowed)
    {
      misoAllowed = false;
      
      for(Player p: party)
      {
        int pmc = 0;
        
        ArrayList<Integer> rtypes = p.getPlatter().getRecentTypes();
        
        for(int t : rtypes)
          if(t == 30)
            pmc++;    
         
        for(int i = 0; i < pmc; i++)
        {
          if(p.getName().equals("you"))
            misoFail = true;
            
          narration.add(p.getName() + " could not play miso soup because at least two miso soups were played.");
          discardPile.add(p.getPlatter().removeMiso());
        }
      }
    }
  }
  
  public void scoreRound()
  {
    for(int i = 0; i < party.length; i++)
      party[i].addScore(party[i].getPlatter().scoreSelf(info, getOpps(i)));
  }
  
  public void resetScored()
  {
    for(int i = 0; i < party.length; i++)
      party[i].getPlatter().resetScored();
  }

  public void convertDes()
  {
    for(int i = 0; i < party.length; i++)
      if(info[6] == 1)
        party[i].convertPudding(getOpps(i), info[0]);
      else if(info[6] == 2)
        party[i].convertGTIC();
      else party[i].convertFruit();  
  }
  
  private boolean CPUSpoonRequest(int type, int index, int priority)
  {
    narration.add(party[index].getName() + " is requesting a(n) " + new Card(type).toString() + ".");
    
    for(int i = 1 + index; i < party.length; i++)
      if(spoonRequest(type, index, i, priority, false))
        return false;
        
    if(spoonRequest(type, index, 0, priority, false))
      return true;
    
    for(int i = 1; i < index; i++)
      if(spoonRequest(type, index, i, priority, false))
        return false;
        
    discardPile.add(party[index].getPlatter().removeSpec(priority, true));
    
    return false;
  }
   
  private boolean spoonRequest(int type, int rIndex, int aIndex, int priority, boolean recursive)
  {
    if(type < 46)
    {
      if(handleSearchResult(party[aIndex].getHand().searchCard(type, aIndex == 0), rIndex, aIndex, priority))
      {
        if(aIndex == 0)
          narration.add("choose an applicable food to give to " + party[rIndex].getName() + ".");
        else 
        {
          narration.add(party[rIndex].getName() + " received it from " + party[aIndex].getName() + "!");
          ArrayList<Card> rIndexCards = party[rIndex].getPlatter().getCards();
          Card topCard = rIndexCards.get(rIndexCards.size() - 1);
          if(topCard.isDisguised())
            narration.add(party[rIndex].getName() + " copied a(n) " + topCard + " with a special order!");
        }
          
        return true;
      }
      else if(!recursive)
        narration.add(party[aIndex].getName() + " did not have it.");
    }
    else
    {
      int[] subtypes = new Card(type).getSubtypes();
      ArrayList<Integer> subList = new ArrayList<Integer>();
      for(int i : subtypes)
        subList.add(i);
      
      if(info[7] == 1)
        java.util.Collections.shuffle(subList);
      else if(subList.get(0) == 34 || subList.get(0) == 40)
        subList = orderSubList(subList, rIndex);
    
      for(int i = 0; i < subList.size(); i++)
        if(spoonRequest(subList.get(i), rIndex, aIndex, priority, true))
          return true;
          
      narration.add(party[aIndex].getName() + " did not have it.");
    }
         
    return false;
  }
  
  private ArrayList<Integer> orderSubList(ArrayList<Integer> subList, int rIndex)
  {
    ArrayList<Integer> ordered = new ArrayList<Integer>();
    ArrayList<Float> subValues = new ArrayList<Float>();
    for(int i = 0; i < subList.size(); i++)
      subValues.add(party[rIndex].getPlatter().getExpectedVal(subList.get(i), party[rIndex].getDesCount(), party[rIndex].getFruit(), getOpps(rIndex), roundNum, false, false, false));
    
    java.util.Collections.sort(subValues);

    for(int i = 0; i < subValues.size(); i++)
    {
      boolean flag = false;
      int k = 0; 
      
      while(!flag && k < subList.size())
      {
        if(party[rIndex].getPlatter().getExpectedVal(subList.get(k), party[rIndex].getDesCount(), party[rIndex].getFruit(), getOpps(rIndex), roundNum, false, false, false) == subValues.get(i) && !ordered.contains(subList.get(k)))
        {
          ordered.add(subList.get(k));
          flag = true;
        }
        
        k++;
      }
    }
    
    return ordered;
  }
  
  private int[] generateSpoonTypes()
  {
    int[] spoonTypes = new int[12]; 
    
    spoonTypes[0] = 68;
    spoonTypes[1] = 2;
    spoonTypes[2] = 3;
    
    if(info[0] == 1 || info[0] == 3)
    {
      spoonTypes[3] = 45 + info[0];
      
      for(int i = 4; i <= 5; i++)
        spoonTypes[i] = info[0] * 2 + i - 1;
    }
    else spoonTypes[3] = 7;
    
    for(int i = 1; i <= 2; i++)
      if(info[i] <= 4)
        spoonTypes[5 + i] = 48 + info[i];
      else spoonTypes[5 + i] = 18 + info[i];
    
        
    if(info[3] == 8)
      spoonTypes[8] = 64; 
    else spoonTypes[8] = 26 + info[3];
    
    for(int i = 4; i <= 5; i++)
      spoonTypes[5 + i] = 26 + info[i];
    
    if(info[6] <= 2)
      spoonTypes[11] = 37 + info[6];
    else spoonTypes[11] = 67;
    
    return spoonTypes;
  }
  
  private boolean handleSearchResult(Card found, int rIndex, int aIndex, int priority)
  {
    if(found == null)
      return false;
      
    if(aIndex != 0)
    {
      if(found.getType() == 26)
        found.setType(replacementType);
        
      party[aIndex].getHand().getCards().add(party[rIndex].getPlatter().removeSpec(priority, true));
      party[rIndex].getPlatter().addFood(found);
    }
    
    return true;
  }
  
  public void generateHumanMenu()
  {
    Card[] cds = new Card[4];
    
    for(int i = 0; i < 4; i++)
      cds[i] = pantry.dealCard();
      
    getParty()[0].setHand(new Hand(cds));
  }
  
  private int getUrplace()
  {
    return party[0].getPlatter().getUrplace((getOpps(0)));
  }
  
  private void handleUramakiScore(Player scorer, int points)
  {
    scorer.addScore(points);
    
    if(scorer.getName().equals("you   "))
      narration.add("you reached 10 uramaki and scored " + points + " points!");
    else narration.add(scorer.getName() + " reached 10 uramaki and scored " + points + " points!");
  }
  
  private int getMaxUramaki(ArrayList<Player> ueaters)
  {
    int max = 0; 
    
    for(Player p: ueaters)
    {
      int pucount = p.getPlatter().countUramaki();
      
      if(pucount > max)
        max = pucount;
    }
    
    return max;
  }
  
  private int hoveringSO(int xLoc, int yLoc)
  {
    if(yLoc < 450 || yLoc > 610)
      return 0;
      
    int size = party[0].getHand().getCards().size();
    
    for(int i = 0; i < size; i++)
      if(xLoc > ((1400 - cardSize * size) / 2) + cardSize * i && xLoc <= ((1400 - cardSize * size) / 2) + cardSize * (i +  1))
        if(party[0].getHand().getCards().get(i).getType() == 26)
          return 1;
        else return -1;
        
    return 0;
  }
  
  private void drawStandard()
  {
    textSize(32);
    fill(255);
      
    if(info[6] <= 2)
    {
      text("Score: " + party[0].getScore() + ", Dessert: " + party[0].getDesCount(), 350, 430);
      text("Score: " + party[1].getScore() + ", Dessert: " + party[1].getDesCount(), 350, 30);
      text("Score: " + party[2].getScore() + ", Dessert: " + party[2].getDesCount(), 750, 30);
      text("Score: " + party[3].getScore() + ", Dessert: " + party[3].getDesCount(), 750, 430); 
    }
    else
    {
      text("Score: " + party[0].getScore() + ", Dessert: " + party[0].getWater() + "-" + party[0].getPine() + "-" + party[0].getOrange(), 270, 430);
      text("Score: " + party[1].getScore() + ", Dessert: " + party[1].getWater() + "-" + party[1].getPine() + "-" + party[1].getOrange(), 270, 30);
      text("Score: " + party[2].getScore() + ", Dessert: " + party[2].getWater() + "-" + party[2].getPine() + "-" + party[2].getOrange(), 750, 30);
      text("Score: " + party[3].getScore() + ", Dessert: " + party[3].getWater() + "-" + party[3].getPine() + "-" + party[3].getOrange(), 750, 430);
    }
      
    if(cardsLeft == 0)
    {
      fill(128, 128, 128);
      ellipse(700, 530, 250, 150);
      fill(255);
        
      if(roundNum <= 2)
        text("Next Round", 623, 540);
      else text("See Results", 625, 540);
    }
      
    for(int i = 0; i < narration.size(); i++)
    {
      textSize(16);
      if(info[6] <= 2)
        text(narration.get(i), 350, 50 + i * 20);
      else text(narration.get(i), 270, 50 + i * 20);
    }
  }
  
  private void drawFinal()
  {
    textSize(32);

    fill(218, 165, 32);
    text(party[3].getName(), 615, 250);
    text(party[3].getScore() + "(" + party[3].getDesCount() + ")", 720, 250);
    
    fill(192, 192, 192);
    text(party[2].getName(), 615, 350);
    text(party[2].getScore() + "(" + party[2].getDesCount() + ")", 720, 350);
    
    fill(205, 127, 50);
    text(party[1].getName(), 615, 450);
    text(party[1].getScore() + "(" + party[1].getDesCount() + ")", 720, 450);
    
    fill(255);
    text(party[0].getName(), 615, 550);
    text(party[0].getScore() + "(" + party[0].getDesCount() + ")", 720, 550);
      
    fill(128, 128, 128);
      
    if(timeToBeatJeff == 0 || millis() - timeToBeatJeff > 11000)
    {
      ellipse(1100, 400, 250, 150);
      ellipse(300, 400, 250, 150);
      
      
      fill(255);
      text("Return Home", 1011, 410);
      text("Play Same", 230, 392.5);
      text("Selection", 238, 432.5);
    }
      
    fill(255);
    text("Final Standings", 595, 180);
  }
  
  private void drawSushiKing()
  {
    int[] hms = convertTTBJ();
        
    fill(255, 223, 0);
    text("You beat jeff in " + hms[0] + " hour(s) " + hms[1] + " minute(s) " + hms[2] + " second(s)!", 375, 570); 
        
    PImage sushiking = loadImage("sushiking.jpg");
    sushiking.resize(333, 250);
    image(sushiking, 533, 275);
  }
  
  public void prepare(boolean achComp)
  {
    if(roundNum < 3)
      dealCards();
    else
    {  
      convertDes();
      
      if(!achComp)
      {
        if(party[0].getScore() < 0)
          achievements[20] = true;
        
        if(party[0].getScore() >= 80)
          achievements[22] = true;
      
        if(info[0] == 1)
          ((PlayerPlatter) party[0].getPlatter()).updateModestMaki();
        
        if(speedEats == 3)
          achievements[2] = true;
        
        if(chopCounts >= 4)
          achievements[3] = true;
        
        if(spoonSuccesses >= 4 && !spoonFail)
          achievements[4] = true;
        
        if(menuCounts >= 4)
          achievements[5] = true;
        
        if(takeoutCounts >= 4)
          achievements[6] = true;
        
        ((PlayerPlatter) party[0].getPlatter()).updateWasabiWarrior();
        
        if(info[3] == 1 || info[4] == 1 || info[5] == 1)
          ((PlayerPlatter) party[0].getPlatter()).updateDumplingDisciple();
        
        if((info[3] == 4 || info[4] == 4 || info[5] == 4) && !misoFail)
          ((PlayerPlatter) party[0].getPlatter()).updateMisoMaster();
        
        if((info[3] == 6 || info[4] == 6 || info[5] == 6) && (info[3] == 7 || info[4] == 7 || info[5] == 7))
          ((PlayerPlatter) party[0].getPlatter()).updateUnlikelyFriendship();
      
        if(info[3] == 8)
          ((PlayerPlatter) party[0].getPlatter()).updateOnigiriGuru();
      }
         
      sortPlayers();
      
      if(!achievements[21] && party[0].getName().equals("you"))
          ((PlayerPlatter) party[0].getPlatter()).updateFlashOfBrilliance();
      
      if(!achievements[24] && info[7] == 3 && party[3].getName().equals("you"))
      {
        foodsCompleted[info[0] - 1] = true;
        foodsCompleted[info[1] + 2] = true;
        foodsCompleted[info[2] + 2] = true;
        foodsCompleted[info[3] + 10] = true;
        foodsCompleted[info[4] + 10] = true;
        foodsCompleted[info[5] + 10] = true;
        foodsCompleted[info[6] + 18] = true;
      }
      
      if(!achievements[23] && party[3].getName().equals("you"))
        foodsCompleted[info[7] + 21] = true;
        
      if(timeToBeatJeff == 0 && party[3].getName().equals("you") && info[7] == 4)
        timeToBeatJeff = millis();

      displayFinal = true;
    }
    
    roundNum++;
  }
  
  public void moveOn()
  {
    if(!achievements[10])
      party[0].updateGoingForSeconds();
    
    for(int i = 0; i < 4; i++)
      party[i].updateDes(info[6]);
    
    scoreRound();
    if(info[0] == 3)
      resetScored();
      
    if(roundNum == 1)
      reset(3);
    else if(roundNum == 2)
      reset(2);
    else reset(0);
    
    if(pantry.getCards().size() + pantry.getDesCards().size() + party[0].getDesCount() + party[1].getDesCount() + party[2].getDesCount() + party[3].getDesCount() != 69)
      error = true;
  }
  
  private void reset(int moreDes)
  {
    ArrayList<Card> ucs = new ArrayList<Card>();
    
    for(int i = 0; i < party.length; i++)
    {
      for(int k = 0; k < party[i].getPlatter().getCards().size(); k++)
        if(!party[i].getPlatter().getCards().get(k).getColor().equals(new Card (37 + info[6]).getColor()))
        {
          if(info[1] == 8 || info[2] == 8 || info[1] == 4 || info[2] == 4)
            party[i].getPlatter().getCards().get(k).correct();
          ucs.add(party[i].getPlatter().getCards().get(k));
        }
      party[i].getPlatter().emptyPlate();
    }
    
    if(info[1] == 8 || info[2] == 8 || info[1] == 4 || info[2] == 4)
      for(int i = 0; i < discardPile.size(); i++)
        discardPile.get(i).correct();
      
    ucs.addAll(discardPile);
    discardPile = new ArrayList<Card>();
    pantry.replenish(ucs, moreDes);
  }
  
  private void switchHands()
  {
    if(info[1] == 8 || info[2] == 8 || info[1] == 4 || info[2] == 4)
      for(int i = 0; i < party.length; i++)
        for(int k = 0; k < party[i].getHand().getCards().size(); k++)
          party[i].getHand().getCards().get(k).correct();

    Hand saved = party[party.length - 1].getHand();
    
    for(int i = party.length - 1; i > 0; i--)
      party[i].setHand(party[i - 1].getHand());
      
    party[0].setHand(saved);
    
    cardsLeft--;
  }
  
  private void resetRecents()
  {
    for(int i = 0; i < party.length; i++)
      party[i].getPlatter().resetRecent();
  }
  
  private void resetSpoChStatuses()
  {
    for(int i = 0; i < party.length; i++)
      party[i].resetSpoChStatus();
  }
  
  public void wrapUp()
  {
    misoAllowed = true;
    resetSpoChStatuses();
    resetRecents();       
    switchHands();
  }
}
*/
