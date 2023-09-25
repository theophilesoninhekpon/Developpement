import java.util.ArrayList;
import java.util.Arrays;
import java.util.Objects;
    
    class Bee {
        private String name;
        private boolean isHome;
      
        public Bee(String name) {
          this.name = name;
          this.isHome = true;
        }
      
        public String getName() {
          return this.name;
        }
      
        public void setName(String newName) {
          this.name = newName;
        }
      
        public boolean isHome() {
          return this.isHome;
        }
      
        public void leaveHome() {
          this.isHome = false;
        }
      
        public void returnHome() {
          this.isHome = true;
        }
      }



public class BeeHive {
  private ArrayList<Bee> beeList;

  public BeeHive(int numBees) {
    this.beeList = new ArrayList<Bee>();
    for (int i = 0; i < numBees; i++) {
      this.beeList.add(new Bee("bee" + i));
    }
  }

  public ArrayList<Bee> getBeeList() {
    return this.beeList;
  }

  public void leaveHome(String beeName) {
    // this.beeList.get(this.beeList.indexOf(new Bee(beeName))).leaveHome();
    this.beeList.get(Integer.parseInt(beeName.substring(3))).leaveHome();

    // for(Bee bee: beeList) {
    //   if(bee.getName().equals(beeName)) {
    //     bee.leaveHome();
    //   }
    // }
  }

  public void addBees(ArrayList<String> beeNames) {
    for(int i = 0; i < beeNames.size(); i++) {
      this.beeList.add(new Bee(beeNames.get(i)));
    }
  }

  public void moveOutBees() {

    // for(int i = this.beeList.size() - 1; i >= 0; i--){
    //   this.beeList.remove(i);
    // }

    int size = this.beeList.size();

    for(int i = 0; i < size; i++){
      this.beeList.remove(0);
    }
  }

  public void renameBees(ArrayList<String> newNames) {
    for(int i = 0; i < newNames.size(); i++) {
        this.beeList.set(i, new Bee(newNames.get(i)));
    }
  }

  public void printBees() {
    for (Bee bee : beeList) {
      System.out.println(bee.getName());
    }
  }

  public static void main(String[] args) {
    BeeHive myHive = new BeeHive(365);
    myHive.leaveHome("bee43");
    System.out.println(myHive.getBeeList().get(43).isHome());
    
    // Ajout de nouvelles abeilles
    ArrayList<String> newBees = new ArrayList<String>();
    newBees.add("bob");
    newBees.add("macey");
    newBees.add("anna");
    
    // Mise à jour de noms
    ArrayList<String> newNames = new ArrayList<String>();
    newNames.add("Paul");
    newNames.add("Peter");
    newNames.add("Peski");

    myHive.moveOutBees();
    myHive.addBees(newBees);
    myHive.renameBees(newNames);
    myHive.printBees();
  }
}
