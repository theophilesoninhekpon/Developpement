
public class GroceryList5 {
    public static boolean isAlphabetized(String[] groceryList) {
    
        String alphabetLetters = "abcdefghijklmnopqrstuvwxyz";

        String[] initialCharacters = new String[groceryList.length-1];

        for(int i = 0; i < groceryList.length - 1; i++) {
            initialCharacters[i] = groceryList[i].split("")[0];
        }

        for(int j = 0; j < initialCharacters.length - 1; j++) {

            int previousLetterIndex = alphabetLetters.indexOf(initialCharacters[j]);
            int nextLetterIndex = alphabetLetters.indexOf(initialCharacters[j+1]);

            if(j < j+1) {
                
                if( previousLetterIndex > nextLetterIndex) {
                    return false;
                } 

            }
        }

        return true;
    }

    public static void main(String[] args) {
        String[] groceryList = {"apples", "banana", "bananas", "chocolate"};
        System.out.println(isAlphabetized(groceryList));
    }
}


