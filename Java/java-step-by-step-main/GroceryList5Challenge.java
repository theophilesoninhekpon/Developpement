import java.util.Arrays;

public class GroceryList5Challenge {
    public static String alphabetizedList(String[] groceryList) {
    
        // String alphabetLetters = "abcdefghijklmnopqrstuvwxyz";

        // String[] initialCharacters = new String[groceryList.length];

        String[] groceryCopyArr = Arrays.copyOf(groceryList, groceryList.length);

        // System.out.println(Arrays.toString(groceryCopyArr));

        // for(int i = 0; i <= groceryList.length - 1; i++) {
        //     initialCharacters[i] = groceryList[i].split("")[0];
        // }

        // for(int j = 0; j <= initialCharacters.length - 1; j++) {
                    
        //         for(int k = 0; k <= initialCharacters.length -1; k++) {
                    
        //             int wordIndex = 0;
        //             String word = groceryCopyArr[j];

        //             if(k < initialCharacters.length) {

        //                 int tempIndex;
        //                 int previousLetterIndex = alphabetLetters.indexOf(initialCharacters[j]);
        //                 int nextLetterIndex;
        //                 if(k < initialCharacters.length - 1){
        //                     tempIndex = k+1;
        //                     nextLetterIndex = alphabetLetters.indexOf(initialCharacters[tempIndex]);
        //                 } else {
        //                     tempIndex = k;
        //                     nextLetterIndex = alphabetLetters.indexOf(initialCharacters[tempIndex]);
        //                 }
        //                 String secondWord = groceryCopyArr[tempIndex];

        //                 if(previousLetterIndex > nextLetterIndex) {
        //                     wordIndex = tempIndex;
        //                 } else {
        //                     wordIndex = j;
        //                 }

        //                 groceryList[wordIndex] = word;
        //                 groceryList[j] = secondWord;
                        
        //             }
        //             System.out.println(Arrays.toString(groceryList));
                   
        //         }
        // }

        Arrays.sort(groceryCopyArr);
        return Arrays.toString(groceryCopyArr);
        
    }

    public static void main(String[] args) {
        String[] groceryList = {"dananas", "apples", "banana", "chocolate"};
        System.out.println(alphabetizedList(groceryList));
    }
}