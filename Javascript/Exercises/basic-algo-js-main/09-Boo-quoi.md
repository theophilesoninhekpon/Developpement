# Boo quoi ?

Vérifiez si la valeur est un booléen primitif. Retournez **true** ou **false**.

Les booléens primitifs sont **true** et **false**

```js
function booWho(bool) {
  return bool;
}

booWho(null);
```

# Tests

**booWho(true)** doit retourner **true**

**booWho(false)** doit retourner **true**

**booWho([1, 2, 3])** doit retourner **false**

**booWho([].slice)** doit retourner **false**

**booWho({ "a": 1 })** doit retourner **false**

**booWho(1)** doit retourner **false**

**booWho(NaN)** doit retourner **false**

**booWho(a)** doit retourner **false**

**booWho("true")** doit retourner **false**

**booWho("false")** doit retourner **false**

