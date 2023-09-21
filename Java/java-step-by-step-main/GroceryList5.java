public class GroceryList5 {
    public static boolean isAlphabetized(String[] groceryList) {

        int result;
        boolean res = false;
        for(int i = 0; i < groceryList.length; i++) {

            // Pour s'arrêter juste au dernier élément du tableau
            int index = 0;
            if(i == groceryList.length-1){
                index = i;
            } else {
                index = i+1;
            } 

            String word1 = groceryList[i];
            String word2 = groceryList[index];

            result = word1.compareTo(word2);

            if(result < 0) {
                res = true;
            } else {
                return res;
            }
      
        }
        return res;
      
    }

    public static void main(String[] args) {
        String[] groceryList = {"apples","banana", "bananas"};
        System.out.println(isAlphabetized(groceryList));
    }
}


