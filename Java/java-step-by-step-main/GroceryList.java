
public class GroceryList {
    public static double getTotalCost(double[] groceryPrices) {
        double totalCost = 0.0;

        for(double price: groceryPrices) {
            totalCost += price;
        }

        return totalCost;
    }

    public static void main(String[] args) {
        double[] groceryPrices = {10.0, 12.3, 8.45, 2.43};
        double[] unlikelyGroceryPrices = {10.0, 12.3, 8.45, 2.43};

        System.out.println(getTotalCost(groceryPrices));
        System.out.println(getTotalCost(unlikelyGroceryPrices));
    }
}