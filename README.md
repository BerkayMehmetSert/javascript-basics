# JavaScript Temelleri

## Açıklama

Bu repository JavaScript temellerini öğrenmek isteyenler için hazırlanmıştır.

## İçerik

* [JavaScript Nedir?](#javascript-nedir)
* [JavaScript Yazım Kuralları](#javascript-yazım-kuralları)
* [Değişkenler](#değişkenler)
* [Veri Okuma ve Yazma](#veri-okuma-ve-yazma)
* [Veri Türleri](#veri-tipleri)
* [Veri Tipi Dönüşümleri](#veri-tipi-dönüşümleri)

### JavaScript Nedir

JavaScript, web tarayıcılarında ve bazı sunucu taraflı platformlarda kullanılan popüler bir programlama dilidir. HTML ve
CSS ile birlikte web sayfalarının dinamik ve etkileşimli özelliklerle donatılmasını sağlayan temel bileşenlerden
biridir.

JavaScript'in temel özellikleri şunlardır:

1. **Dinamik İçerik**: JavaScript, kullanıcının etkileşimleri ve olayları işleyerek web sayfalarının içeriğini dinamik
   olarak değiştirebilir. Bu sayede sayfa yenileme olmadan içeriklerin güncellenmesi ve kullanıcı dostu deneyimlerin
   sunulması mümkün olur.

2. **Tarayıcı İşlemleri**: JavaScript, tarayıcıda çalıştığından, kullanıcı arayüzü işlemleri (örneğin, form doğrulama,
   animasyonlar, pop-up pencereler gibi) ve tarayıcı etkileşimleri (örneğin, gezinme, cookie yönetimi, localStorage)
   gibi işlemleri yönetebilir.

3. **DOM Manipülasyonu**: Document Object Model (DOM) kullanarak, JavaScript web sayfalarındaki HTML ve CSS yapılarını
   değiştirme ve etkileşimli hale getirme yeteneğine sahiptir.

4. **Olay Tabanlı Programlama**: JavaScript, kullanıcı etkileşimleri ve diğer olaylar (örneğin, tıklama, fare
   hareketleri, klavye girişleri) için olay tabanlı bir yapı sunar ve bu olaylara tepki verme yeteneği sağlar.

5. **Fonksiyonlar ve Nesneler**: JavaScript, fonksiyonlar ve nesneler aracılığıyla verilerin düzenlenmesini ve
   işlenmesini sağlayan nesne tabanlı bir programlama dili olarak kullanılabilir.

6. **Sunucu Tarafında Kullanım**: Node.js ile birlikte JavaScript, sunucu tarafında da çalıştırılabilir ve web
   uygulamalarının sunucu kısmında kullanılabilir.

JavaScript, web geliştirme süreçlerinde çok yaygın olarak kullanılan bir dil olup, sürekli olarak gelişmekte ve
genişlemektedi

### JavaScript Yazım Kuralları

JavaScript yazım ve noktala kuralları, programlarınızın düzgün çalışması ve anlaşılabilir olması için oldukça önemlidir.
Bu kurallara uyarak kodunuzun daha tutarlı ve okunabilir olmasını sağlayabilirsiniz. İşte JavaScript'te dikkate almanız
gereken temel yazım ve noktala kuralları:

1. **Noktalı Virgül (;) Kullanımı**: Her JavaScript ifadesi sonunda noktalı virgül (;) kullanmak iyi bir uygulamadır.
   JavaScript, noktalı virgülleri otomatik olarak ekleyebilir, ancak bu davranış tahmin edilemez olabilir. Bu nedenle,
   kendi kodunuzda noktalı virgüllerle ifadeleri sonlandırmak daha güvenli bir yaklaşımdır.
   Örnek:

```javascript
let name = "John";
console.log("Hello, " + name + ";"); // noktalı virgül kullanımı
```

2. **Blok İfadeleri:** Blok ifadeleri (örneğin, döngüler veya koşullu ifadelerin gövdeleri) süslü parantezler {} içinde
   tanımlanır. Blok içindeki her ifadeyi satır sonunda noktalı virgülle bitirmek gerekmez, ancak bu kodun okunabilirliği
   için önerilir.

Örnek:

```javascript
if (condition) {
    // Blok başlangıcı
    console.log("True");
    console.log("Another statement"); // noktalı virgül kullanılmış
} // Blok sonu
```

3. **Değişken Tanımlama:** Değişkenleri tanımlarken var, let veya const anahtar kelimelerini kullanabilirsiniz. ES6 ile
   gelen let ve const, var'a göre daha modern ve kapsam odaklı değişken tanımlama yöntemleridir. Const, değişkenin
   değerinin sonradan değiştirilemeyeceği durumlarda kullanılır.

Örnek:

```javascript
var x = 5; // eski, tavsiye edilmez
let y = 10; // modern, değiştirilebilir
const PI = 3.14; // sabit, değeri sonradan değiştirilemez
```

4. **Nesneler ve Diziler:** Nesneler ve diziler, süslü parantezler {} veya köşeli parantezler [] içinde tanımlanır.
   Nesne özelliklerini ve dizileri virgülle ayırırken son öğeden sonra virgül kullanmak isteğe bağlıdır, ancak daha
   fazla özellik eklemek veya taşımak için kodu daha kolay düzenlemek adına önerilir.

Örnek:

```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York",
};

let fruits = ["apple", "orange", "banana",];
```

5. **Fonksiyonlar:** Fonksiyonlar süslü parantezler {} içinde tanımlanır. Fonksiyon tanımlarken son satırda noktalı
   virgül kullanmak gerekmez.

Örnek:

```javascript
function add(a, b) {
    return a + b;
}

const multiply = function (x, y) {
    return x * y;
};
```

6. **Satır Sonu Boşlukları ve Girintileme:** Kodunuzun okunabilirliği için satır sonu boşlukları ve girintilemeye özen
   gösterin. Satır sonunda gereksiz boşluklar eklemekten ve kodunuzu düzensiz hale getirmekten kaçının. Ayrıca, blokları
   düzgünce girintileyerek kodunuzun yapısını belirginleştirin.

Örnek:

```javascript
function exampleFunction() {
    if (condition) {
        console.log("Hello");
    } else {
        console.log("World");
    }
}
```

7. **Yorumlar:** Kodunuzu açıklayıcı yorumlarla belgeleyin. Yorumlar, kodun ne yaptığını ve neden belirli şekilde
   yazıldığını anlamak için büyük önem taşır. Tek satırlık yorumlar için //, çok satırlı yorumlar için /* */
   kullanabilirsiniz.

Örnek:

```javascript
// Bu bir tek satırlık yorum örneğidir

/*
Bu
çok
satırlı
bir
yorum
örneğidir
*/
```

### Değişkenler

JavaScript programlama dilinde değişken oluşturma ve kullanma işlemleriyle ilgili temel bilgileri içerir. Değişkenler,
verileri geçici olarak saklamak veya işlem yapmak için kullanılan önemli bileşenlerdir. JavaScript'te değişkenler
tanımlarken dikkat edilmesi gereken bazı kurallar vardır.

#### Değişken Nedir?

Değişkenler, programda geçici olarak değerleri saklamak veya işlem yapmak amacıyla kullanılan isimlendirilmiş
birimlerdir. JavaScript, değişkenleri tanımlamak için `var`, `let`, veya `const` anahtar kelimelerini kullanır.

**Değişken Oluşturma ve Tanımlama**

1. `var`: Eski bir tanımlama yöntemidir. Global veya yerel kapsama sahip değişkenler oluşturabilir. Ancak, var
   değişkenleri, blok kapsamında tanımlandıkları durumda işlev kapsamına dahil olurlar.

Örnek:

```javascript  
var age = 30;
var name = "John";
```

2. `let`: Modern JavaScript'te tanımlanan değişkenlerdir. Blok kapsamında tanımlanan değişkenler, sadece tanımlandıkları
   blok içinde geçerlidir. Bu, kodun daha tutarlı ve güvenli olmasını sağlar.

Örnek:

```javascript
let count = 0;
let message = "Hello!";
```

3. `const`: Sabit (değiştirilemez) değerler tanımlamak için kullanılır. Bir kez atandıktan sonra değeri değiştirilemez.

Örnek:

```javascript
const PI = 3.14;
const url = "https://example.com";
```

**Değişken İsimlendirme Kuralları**

* Değişken adları harf (A-Z veya a-z), rakam (0-9) veya alt çizgi (_) karakteri ile başlamalıdır.
* Değişken adları boşluk veya özel karakter içermemelidir (dolar işareti $ hariç).
* Değişken adları büyük/küçük harf duyarlıdır. Yani "age" ve "Age" farklı değişkenlerdir.
* Değişken adları anlamlı ve açıklayıcı olmalıdır. Kısaltmalar yerine anlaşılır isimler tercih edilmelidir.

**Değişkenlerin Kapsamı (Scope)**

JavaScript'te değişkenlerin kapsamı (scope) önemlidir. Global değişkenler, programın her yerinden erişilebilirken, yerel
değişkenler sadece tanımlandıkları blok veya işlev içinde erişilebilirler. Bu, değişken çakışmalarını önler ve kodun
daha düzenli olmasını sağlar.

Örnekler:

1. Global Değişken Tanımlama:

```javascript
var globalVar = "Ben bir global değişkenim!";
```

2. Yerel Değişken Tanımlama:

```javascript
function exampleFunction() {
    let localVar = "Ben bir yerel değişkenim!";
    console.log(localVar); // Erişilebilir
}
```

3. Sabit Değişken Kullanımı:

```javascript
const PI = 3.14;
let radius = 5;
let area = PI * (radius ** 2);
```

### Veri Okuma ve Yazma

JavaScript'te veri okuma ve yazdırma işlemi, programınızın çalışma sürecinde bilgileri konsola veya web sayfasına çıktı
olarak
göstermek için kullanılan önemli bir konudur. Veri yazdırma, kodunuzun doğru çalıştığını teyit etmek, hata ayıklama
yapmak ve kullanıcıya bilgi sunmak için yaygın bir yöntemdir. JavaScript'te veri yazdırma için farklı yöntemler
mevcuttur:

1. **console.log() Yöntemi:** `console.log()` yöntemi, JavaScript'te en yaygın kullanılan veri yazdırma yöntemidir. Bu
   yöntem, veriyi tarayıcı konsolunda görüntüler ve kodunuzun çalışma durumunu izlemenizi sağlar.

Örnek:

```javascript
let name = "John";
let age = 30;
console.log("Merhaba, " + name + "! Yaşın: " + age);
```

2. **document.write() Yöntemi:** `document.write()` yöntemi, web sayfanızın içine içerik eklemek için kullanılabilir.
   Ancak, bu yöntemi dikkatli kullanmak önemlidir, çünkü sayfanın yüklendiği zamanlarda içeriği değiştirebilir ve mevcut
   içeriği silerek beklenmedik sonuçlara neden olabilir.

Örnek:

```javascript
document.write("Hoş geldiniz!");
```

3. **innerHTML Yöntemi:** innerHTML özelliği, bir HTML elemanının içeriğini değiştirmek için kullanılır. Bu yöntemle,
   belirli bir HTML elemanının içine veri yazdırabilirsiniz.

Örnek:

```javascript
let message = "Yeni içerik";
document.getElementById("myElement").innerHTML = message;
```

4. **alert() Yöntemi:** `alert()` yöntemi, tarayıcıda bir bildirim kutusu açarak kullanıcıya bilgi sunmak için
   kullanılır.

Örnek:

```javascript
let message = "Hata oluştu!";
alert(message);
```

5. **prompt() Yöntemi:** `prompt()` yöntemi, kullanıcıdan veri almak için kullanılır. Kullanıcıdan bir girdi alır ve bu
   girdiyi kullanarak çeşitli işlemler yapabilirsiniz.

Örnek:

```javascript
let name = prompt("Adınız nedir?");
console.log("Merhaba, " + name + "!");
```

6. **confirm() Yöntemi:** `confirm()` yöntemi, kullanıcıya bir onay kutusu göstererek evet veya hayır gibi seçenekler
   sunmak için kullanılır.

Örnek:

```javascript
let result = confirm("Emin misiniz?");
if (result) {
    console.log("Onaylandı!");
} else {
    console.log("Reddedildi!");
}
```

### Veri Tipleri

JavaScript, farklı türde verileri temsil etmek ve işlemek için çeşitli veri tipleri sunar. Her veri tipi, farklı
özelliklere ve kullanım amaçlarına sahiptir. Aşağıda, JavaScript'te bulunan temel veri tipleri ve kısa açıklamaları
bulunmaktadır:

1. **Number (Sayı):** Sayılar, hem tamsayılar (örneğin, 5) hem de ondalıklı sayılar (örneğin, 3.14) şeklinde temsil
   edilebilir. JavaScript, sayıları matematiksel işlemler yapmak için kullanabilir.

Örnek:

```javascript
let age = 30;
let pi = 3.14;
```

2. **String (Metin):** Metin veya karakter dizileri, tek tırnak (' ') veya çift tırnak (" ") içinde temsil edilir.
   Metinler, metin işleme ve metin tabanlı verileri temsil etmek için kullanılır.

Örnek:

```javascript
let name = "John";
let message = 'Merhaba, nasılsınız?';
```

3. **Boolean (Mantıksal):** Boolean değerleri sadece iki değere sahiptir: true veya false. Mantıksal veri tipleri,
   koşullu ifadelerde ve kontrol akışında kullanılır.

Örnek:

```javascript
let isActive = true;
let isLogged = false;
```

4. **Undefined (Tanımsız):** Bir değişkenin değeri atanmadığında veya tanımsız olduğunda JavaScript, o değişkeni
   undefined olarak değerlendirir.

Örnek:

```javascript
let x;
console.log(x); // Çıktı: undefined
```

5. **Null (Boş):** null, bir değişkenin bilerek boş olduğu ve hiçbir değere sahip olmadığı anlamında kullanılır.

Örnek:

```javascript
let y = null;
console.log(y); // Çıktı: null
```

6. **Object (Nesne):** Nesneler, birden çok veri ve işlevi bir araya getiren karmaşık veri yapılarıdır. Nesneler,
   özellikler ve metotlar içerebilir ve daha karmaşık veri yapılarını temsil etmek için kullanılır.

Örnek:

```javascript
let person = {
    name: "John",
    age: 30,
    sayHello: function () {
        console.log("Merhaba!");
    }
};
```

7. **Array (Dizi):** Diziler, birden çok değeri tek bir değişken içinde depolamak için kullanılır. Diziler, elemanlara
   sıfır tabanlı indekslerle erişilir ve döngülerle işlem yapmak için sıklıkla kullanılır.

Örnek:

```javascript
let colors = ["red", "green", "blue"];
console.log(colors[0]); // Çıktı: red
```

JavaScript, dinamik tiplemeye sahip bir dildir, bu da değişkenlerin türlerinin otomatik olarak belirlendiği anlamına
gelir. Bir değişkenin türünü anlamak için typeof operatörü kullanılabilir.

Örnek:

```javascript
let value = 42;
console.log(typeof value); // Çıktı: "number"
```

JavaScript veri tipleri, programların temel yapı taşlarıdır ve verilerin doğru şekilde işlenmesi ve depolanmasını
sağlar. Bu temel veri tiplerini anlamak, JavaScript'te etkili ve doğru programlar yazmanıza yardımcı olacaktır.

### Veri Tipi Dönüşümleri

JavaScript, değişkenler arasında farklı veri tipleri arasında dönüşümler yapmanıza izin verir. Veri tipi dönüşümleri,
değişkenlerin bir veri tipinden başka bir veri tipine dönüştürülmesini sağlar. Bu, programlama sürecinde verileri
işlerken ve uygun sonuçlar alırken önemli bir rol oynar. JavaScript'te yaygın olarak kullanılan veri tipi dönüşümleri
aşağıda açıklanmıştır:

1. **String Dönüşümü:** Bir değeri `String` veri tipine dönüştürmek için `String()` fonksiyonu veya değişkenin önüne `+`
   işareti eklenerek kullanılabilir.

Örnek:

```javascript
let number = 42;
let numberAsString = String(number); // Değeri "42" (string) olarak dönüştürür.

let booleanValue = true;
let booleanAsString = String(booleanValue); // Değeri "true" (string) olarak dönüştürür.

let value = 123;
let stringValue = value + ""; // Değeri "123" (string) olarak dönüştürür.
```

2. **Number Dönüşümü:** Bir değeri `Number` veri tipine dönüştürmek için `Number()` fonksiyonu veya `parseInt()`
   ve `parseFloat()` fonksiyonları kullanılabilir.

Örnek:

```javascript
let strNumber = "42";
let number = Number(strNumber); // Değeri 42 (number) olarak dönüştürür.

let strFloat = "3.14";
let floatNumber = parseFloat(strFloat); // Değeri 3.14 (number) olarak dönüştürür.

let strInt = "123";
let intNumber = parseInt(strInt); // Değeri 123 (number) olarak dönüştürür.
```

3. **Boolean Dönüşümü:** Bir değeri `Boolean` veri tipine dönüştürmek için `Boolean()` fonksiyonu kullanılabilir.

Örnek:

```javascript
let value = 0;
let boolValue = Boolean(value); // Değeri false (boolean) olarak dönüştürür.

let str = "JavaScript";
let boolStr = Boolean(str); // Değeri true (boolean) olarak dönüştürür.

let undefinedValue = undefined;
let boolUndefined = Boolean(undefinedValue); // Değeri false (boolean) olarak dönüştürür.
```

4. **Implicit (Otomatik) Dönüşüm:** JavaScript, bazı durumlarda dönüşümleri otomatik olarak yapabilir. Örneğin, farklı
   veri tipleri arasında matematiksel işlemler yaparken, karşılaştırmalar yaparken veya mantıksal operatörler
   kullanırken otomatik dönüşümler gerçekleşir.

Örnek:

```javascript
let num = 42;
let str = "3";
let sum = num + str; // "423" (string) olarak otomatik dönüşüm yapar.

let number = 10;
let booleanValue = true;
let result = number > booleanValue; // true (boolean) olarak otomatik dönüşüm yapar.
```

Veri tipi dönüşümleri, değişkenlerin farklı veri tipleri arasında uygun şekilde dönüştürülmesini ve işlenmesini sağlar.
Ancak dönüşümler sırasında dikkatli olunmalıdır, çünkü beklenmedik sonuçlara neden olabilirler. Bu nedenle, dönüşümleri
açıkça belirtmek veya koşulları iyi düzenlemek önemlidir.