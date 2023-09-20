
public class GroceryList2 {
    public static double getMostExpensiveItemCost(double[] groceryPrices) {
        double maxCost = groceryPrices[0];

        for(double itemPrice: groceryPrices) {

            if(itemPrice > maxCost) {
                maxCost = itemPrice;
            }
        }

        return maxCost;
    }

    public static void main(String[] args) {
        double[] groceryPrices = {10.0, 12.3, 8.45, 2.43};

        System.out.println(getMostExpensiveItemCost(groceryPrices));
    }
}