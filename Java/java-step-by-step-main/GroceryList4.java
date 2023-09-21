
public class GroceryList4 {
    public static boolean hasSpecialItem(double[] groceryPrices) {
        
        for(double price: groceryPrices) {
            String strPrice = String.valueOf(price);
           
            if(strPrice.endsWith(".99")) {
                return true;
            }

        }
        
        return false;
    }

    public static void main(String[] args) {
        double[] groceryList = {10.0, 89.9, 8.99, 2.34};
        System.out.println(hasSpecialItem(groceryList));
    }
}