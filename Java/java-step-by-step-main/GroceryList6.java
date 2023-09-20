import java.util.ArrayList;
import java.util.Arrays;

public class GroceryList6 {

    public static String hasDuplicates(String[] groceryList) {
        
        ArrayList<String> arr = new ArrayList<String>();

        for(int i = 0; i <= groceryList.length - 1; i++) {

            String temp = groceryList[i];

            // for (int j = 0; j < groceryList.length - 1; j++) {
                
            //     // if(j == i) {
            //     //     continue;
            //     // }

            //     // if(groceryList[j].equals(temp)) {
            //     //     return true;
            //     // } 


            // }
        
            if(arr.size() != 0) {
                int s = arr.size();
                for (int j = 0; j < s; j++) {
                    
                    System.out.println(i);
                    if(!(arr.get(j).equals(temp))) {
                     System.out.println("ici");
                    arr.add(i, temp);
                 }

                }

            } else {
                arr.add(i, temp);
            }
        }

        String str = "";
        
        for(String item: arr) {
            str += item;
        }
        return str;
    }
    
      public static void main(String[] args) {
        String[] groceryList = {"apples", "banana", "Apples", "chocolate"}; 
        System.out.println(hasDuplicates(groceryList));
      }

}


