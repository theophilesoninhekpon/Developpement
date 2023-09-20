
public class GroceryList3 {
    public static int getNumAllergicItems(String[] groceryList) {
        int numAllergicItems = 0;

        for(String item: groceryList) {
            if(item.length() > 4) {
                numAllergicItems++;
            }
        }
        return numAllergicItems;
    }

    public static void main(String[] args) {
        String[] groceryList = {"apple", "milk", "bananas", "chocolate"};

        System.out.println(getNumAllergicItems(groceryList));
    }
}