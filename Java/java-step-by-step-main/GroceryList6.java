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
                int k = 0;
                for (int j = 0; j < arr.size(); j++) {
                    if(!arr.contains(temp)) {
                        k++;
                        arr.add(k, temp);
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
        String[] groceryList = 
        {"apples",
         "banana",
         "apples",
         "chocolate",
         "mangoes",
         "strawberry",
         "strawberry",
         "lemon",
         "watermeal",
         "chocolate",
         "lemon",
         "apples"}; 
        System.out.println(hasDuplicates(groceryList));
      }

}


