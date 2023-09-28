class Person {
    String name;

    public Person(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Alice");
        modifyPersonName(person);
        System.out.println(person.name); // Ceci affichera "Bob" car l'objet a été modifié dans la fonction.

        
    }

    public static void modifyPersonName(Person p) {
        p.name = "Bob";
    }
}
