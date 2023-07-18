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
* [Operatörler](#operatörler)
* [Koşullu İfadeler](#koşullu-ifadeler)
* [Döngüler](#döngüler)
* [Fonksiyonlar](#fonksiyonlar)
* [Gömülü Fonksiyonlar](#gömülü-fonksiyonlar)
* [Nesne Tabanlı Programlama](#nesne-tabanlı-programlama)
* [Diziler](#diziler)
* [DOM Nedir](#dom-nedir)
* [HTML Olayları Nedir](#html-olayları-nedir)
* [Window Nesnesi Nedir](#window-nesnesi-nedir)
* [Navigator Nesnesi Nedir](#navigator-nesnesi-nedir)
* [Screen Nesnesi Nedir](#screen-nesnesi-nedir)
* [Location Nesnesi Nedir](#location-nesnesi-nedir)

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

### Operatörler

JavaScript operatörleri, değişkenler ve değerler üzerinde matematiksel, mantıksal ve diğer işlemleri gerçekleştiren
sembollerdir. Bu operatörler, değişkenleri manipüle etmek, değerleri birbirine eklemek, çıkarmak, karşılaştırmak ve
kontrol etmek için kullanılır. JavaScript'te birçok farklı türde operatör vardır ve her biri farklı amaçlar için
kullanılır. İşte JavaScript'te kullanılan temel operatörler:

1. **Aritmetik Operatörler:** Aritmetik operatörler, matematiksel işlemleri gerçekleştirmek için kullanılır. Toplama,
   çıkarma, çarpma, bölme, mod alma ve üs alma gibi işlemleri yapmak için kullanılabilirler.

* +: Toplama işlemi.
* -: Çıkarma işlemi.
* *: Çarpma işlemi.
* /: Bölme işlemi.
* %: Mod alma işlemi (kalanı bulmak için).
* **: Üs alma işlemi (üs operatörü).

Örnek:

```javascript
let x = 10;
let y = 5;

let sum = x + y; // 15
let difference = x - y; // 5
let product = x * y; // 50
let quotient = x / y; // 2
let remainder = x % y; // 0
let power = x ** y; // 100000
```

2. **Atama Operatörleri:** Atama operatörleri, değişkenlere değer atamak için kullanılır. Değişkenin değerini
   güncellemek veya başka bir değişkenin değerini atamak için kullanılabilirler.

* =: Değer atama işlemi.
* +=: Değişkenin mevcut değerine başka bir değeri ekler.
* -=: Değişkenin mevcut değerinden başka bir değeri çıkarır.
* *=: Değişkenin mevcut değerine başka bir değeri çarpar.
* /=: Değişkenin mevcut değerini başka bir değere böler.

Örnek:

```javascript
let a = 5;
a += 3; // a'nın değeri 8 olur
a -= 2; // a'nın değeri 6 olur
a *= 4; // a'nın değeri 24 olur
a /= 3; // a'nın değeri 8 olur
```

3. **Karşılaştırma Operatörleri:** Karşılaştırma operatörleri, değişkenlerin veya değerlerin ilişkisini kontrol etmek
   için kullanılır. Sonuçları true veya false olarak döndürürler.

* ==: Eşit mi? (Değerleri karşılaştırır.)
* !=: Eşit değil mi?
* ===: Tam eşit mi? (Değerleri ve türleri karşılaştırır.)
* !==: Tam eşit değil mi?
* > : Büyük mü?
* <: Küçük mü?
* > =: Büyük veya eşit mi?
* <=: Küçük veya eşit mi?

Örnek:

```javascript
let x = 5;
let y = 10;

console.log(x == y); // false
console.log(x === "5"); // false
console.log(x < y); // true
console.log(x >= 5); // true
```

4. **Mantıksal Operatörler:** Mantıksal operatörler, mantıksal ifadeleri değerlendirmek için kullanılır. Genellikle true
   veya false değerleriyle sonuçlanırlar ve koşullu ifadelerde kullanılırlar.

* &&: Ve (AND) operatörü.
* ||: Veya (OR) operatörü.
* !: Değil (NOT) operatörü.

Örnek:

```javascript
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
```

JavaScript operatörleri, programlarda verileri işlemek ve kontrol etmek için önemli araçlardır. Doğru operatörleri
kullanarak, kodunuzun daha etkili ve verimli olmasını sağlayabilirsiniz. Operatörlerin öncelik sırası ve etkileşimleri
konusunda dikkatli olmak, doğru sonuçlar almanızı sağlar.

### Koşullu İfadeler

Koşullu ifadeler, programların farklı durumlara göre farklı kod bloklarını çalıştırmalarını sağlayan önemli bir yapıdır.
JavaScript'te koşullu ifadeler, if, else if, else ve switch gibi yapılar kullanılarak gerçekleştirilir. Bu ifadeler,
belirli bir koşulun doğru veya yanlış olduğunu kontrol eder ve buna göre uygun kod bloklarını çalıştırır. Koşullu
ifadeler, programın daha dinamik ve esnek olmasını sağlar. İşte JavaScript'te kullanılan temel koşullu ifadeler:

1. **if İfadesi:** `if` ifadesi, belirtilen koşulun doğru olduğu durumlarda belirli bir kod bloğunun çalıştırılmasını
   sağlar.

Örnek:

```javascript
let hour = 15;

if (hour < 12) {
    console.log("Günaydın!");
}
```

2. **else İfadesi:** `else if` ifadesi, bir koşulun doğru olmadığı durumlarda farklı bir koşulu kontrol etmek ve uygun
   kod bloğunu çalıştırmak için kullanılır.

Örnek:

```javascript
let hour = 15;

if (hour < 12) {
    console.log("Günaydın!");
} else if (hour < 18) {
    console.log("İyi günler!");
}
```

3. **else İfadesi:** `else` ifadesi, tüm önceki koşulların doğru olmadığı durumlarda çalışacak bir varsayılan kod
   bloğunu tanımlamak için kullanılır.

Örnek:

```javascript
let hour = 20;

if (hour < 12) {
    console.log("Günaydın!");
} else if (hour < 18) {
    console.log("İyi günler!");
} else {
    console.log("İyi akşamlar!");
}
```

4. **switch İfadesi:** `switch` ifadesi, birden çok durum arasında seçim yapmak için kullanılır. Bu ifade, belirtilen
   değişkenin değerine göre farklı durumları kontrol eder ve eşleşen durumun kod bloğunu çalıştırır.

Örnek:

```javascript
let day = 2;
let dayName;

switch (day) {
    case 1:
        dayName = "Pazartesi";
        break;
    case 2:
        dayName = "Salı";
        break;
    case 3:
        dayName = "Çarşamba";
        break;
    default:
        dayName = "Bilinmeyen Gün";
}
console.log("Bugün " + dayName);
```

Koşullu ifadeler, programın belirli koşullara göre akışını kontrol etmek ve farklı senaryolara uygun tepkiler vermek
için kullanılır. Programların daha esnek ve karmaşık işlevselliğe sahip olmasını sağlarlar. Doğru koşullu ifadeler
kullanarak, kodunuzun daha okunabilir ve anlaşılabilir olmasını sağlayabilirsiniz.

### Döngüler

JavaScript döngüleri, belirli bir işlemi tekrarlamak için kullanılan yapılardır. Bu tekrarlamalar, bir dizi veriyi
işlemek, belirli koşullar sağlanana kadar işlem yapmak veya bir liste veya dizi üzerinde gezinmek gibi farklı amaçlarla
kullanılabilir. Döngüler, programın daha verimli ve dinamik olmasını sağlayan önemli bir yapıdır. JavaScript'te yaygın
olarak kullanılan döngüler şunlardır:

1. **for Döngüsü:** for döngüsü, belirtilen bir başlangıç değeriyle başlar, belirli bir koşul sağlandığı sürece tekrar
   eder ve her döngü adımında bir sayaç değişkeni arttırılır.

Örnek:

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Döngü adımı: " + i);
}
```

2. **while Döngüsü:** while döngüsü, belirli bir koşul sağlandığı sürece tekrar eder. Döngü koşulu başlangıçta doğru
   olmalıdır, aksi takdirde döngü hiç çalışmayabilir.

Örnek:

```javascript
let i = 0;
while (i < 5) {
    console.log("Döngü adımı: " + i);
    i++;
}
```

3. **do-while Döngüsü:** do...while döngüsü, döngü içeriğini en az bir kez çalıştırır ve ardından belirtilen koşulu
   kontrol eder. Koşul sağlandığı sürece döngü tekrar eder.

Örnek:

```javascript
let i = 0;
do {
    console.log("Döngü adımı: " + i);
    i++;
} while (i < 5);
```

4. **for...in Döngüsü:** for...in döngüsü, bir nesnenin (Object) özelliklerini üzerinde gezinmek için kullanılır.

Örnek:

```javascript
const person = {
    name: "John",
    age: 30,
    occupation: "Developer"
};

for (let prop in person) {
    console.log(prop + ": " + person[prop]);
}
```

5. **for...of Döngüsü:** for...of döngüsü, bir diziyi, dizeyi veya diğer veri yapılarını üzerinde gezinmek için
   kullanılır.

Örnek:

```javascript
const colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}
```

Döngüler, programlamada tekrarlayan işlemleri kolaylaştıran ve kodun daha az tekrarlı ve daha düzenli olmasını sağlayan
önemli bir yapıdır. Döngüler sayesinde, verileri listelemek, hesaplamalar yapmak, verileri filtrelemek ve diğer birçok
işlemi yapmak daha kolay ve etkili hale gelir. Doğru döngü tipini ve koşulları seçmek, verimli ve hatasız kod yazmanızı
sağlar.

### Fonksiyonlar

JavaScript fonksiyonları, belirli bir görevi yerine getiren ve tekrar tekrar kullanılabilen kod bloklarıdır.
Fonksiyonlar, kodun yeniden kullanılabilirliğini ve okunabilirliğini artırarak programlamada önemli bir yapıdır.
Fonksiyonlar, belirli bir işlemi yapmak için bir veya daha fazla parametre alabilir ve bir sonuç döndürebilir.
JavaScript'te fonksiyonlar şu şekilde tanımlanır:

```javascript
function functionName(parameter1, parameter2) {
    // Fonksiyon gövdesi (kod bloğu)
    // İşlemler ve dönüş değeri (optional)
}
```

1. **Fonksiyonun Tanımlanması:** Bir fonksiyon tanımlamak için function anahtar kelimesini kullanırız, ardından
   fonksiyonun adını belirleriz. Fonksiyon adı, fonksiyonu çağırırken kullanılacak isimdir.

Örnek:

```javascript
function sayHello() {
    console.log("Merhaba!");
}
```

2. **Fonksiyonun Çağrılması:** Fonksiyonu tanımladıktan sonra, fonksiyonu çağırmak için fonksiyon adını ve parantezleri
   kullanırız.

Örnek:

```javascript
sayHello(); // Fonksiyonu çağırır ve "Merhaba!" çıktısını verir.
```

3. **Parametreler:** Fonksiyonlara verileri aktarmak için parametreler kullanabiliriz. Parametreler, fonksiyonun
   tanımlandığı yerde belirtilen değişkenlerdir ve fonksiyonun içinde kullanılabilir.

Örnek:

```javascript
function greet(name) {
    console.log("Merhaba, " + name + "!");
}

greet("John"); // Fonksiyonu çağırır ve "Merhaba, John!" çıktısını verir.
```

4. **Dönüş Değeri:** Fonksiyonlar, işlemler sonucunda bir değer dönebilir. return ifadesiyle belirtilen değer, fonksiyon
   tarafından çağrıldığında elde edilebilir.

Örnek:

```javascript
function add(a, b) {
    return a + b;
}

let result = add(3, 5); // result değeri 8 olacaktır.
```

5. **Anonim Fonksiyonlar (Lambda Fonksiyonlar):** Anonim fonksiyonlar, adı olmayan ve genellikle tek bir yerde
   kullanılan fonksiyonlardır. Bu tür fonksiyonlar genellikle bir değişkene atanır veya bir başka fonksiyon içinde
   kullanılır.

Örnek:

```javascript
let multiply = function (a, b) {
    return a * b;
};

let result = multiply(2, 4); // result değeri 8 olacaktır.
```

JavaScript'te fonksiyonlar, kodu daha modüler hale getirir ve aynı işlemi tekrar tekrar yazmak yerine, bir fonksiyon
kullanarak kolayca çağırabiliriz. Fonksiyonlar, karmaşık işlemleri basit adımlara bölmek ve kodu daha düzenli hale
getirmek için önemli bir yapıdır.

### Gömülü Fonksiyonlar

JavaScript, dilin temel özelliklerini tamamlayan bir dizi gömülü (built-in) fonksiyonla birlikte gelir. Bu fonksiyonlar,
yaygın kullanılan işlemleri gerçekleştirmek için hazır olarak sunulur ve özel olarak tanımlamaya gerek duymadan
kullanılabilirler. Bu gömülü fonksiyonlar, programlama sürecini kolaylaştırır ve daha hızlı ve verimli kod yazmanıza
yardımcı olur.

1. **console.log():** console.log() fonksiyonu, mesajları tarayıcı konsoluna yazdırmak için kullanılır. Hata ayıklama ve
   kodu izleme amaçlarıyla sıkça kullanılır.

Örnek:

```javascript
console.log("Merhaba, dünya!");
```

2. **alert():** alert() fonksiyonu, tarayıcıda bir bildirim kutusu açarak kullanıcıya bir mesaj göstermek için
   kullanılır.

Örnek:

```javascript
alert("Hoş geldiniz!");
```

3. **prompt():** prompt() fonksiyonu, kullanıcıdan bir girdi almak için kullanılır. Kullanıcı bir metin girer ve girilen
   değer bir değişkene atanır.

Örnek:

```javascript
let name = prompt("Adınız nedir?");
console.log("Merhaba, " + name + "!");
```

4. **parseInt() ve parseFloat():** parseInt() ve parseFloat() fonksiyonları, bir metni tam sayıya veya ondalıklı sayıya
   dönüştürmek için kullanılır.

Örnek:

```javascript
let num1 = parseInt("42"); // Değer 42 (number) olarak dönüştürülür.
let num2 = parseFloat("3.14"); // Değer 3.14 (number) olarak dönüştürülür.
```

5. **isNaN():** isNaN() fonksiyonu, bir değerin sayı olup olmadığını kontrol etmek için kullanılır. Eğer değer sayıya
   dönüştürülemezse veya NaN (Not a Number) ise true değerini döndürür.

Örnek:

```javascript
let x = "hello";
console.log(isNaN(x)); // Çıktı: true
```

6. **String():** String() fonksiyonu, bir değeri metne dönüştürmek için kullanılır.

Örnek:

```javascript
let number = 42;
let strNumber = String(number); // Değeri "42" (string) olarak dönüştürür.
```

7. **Array Methods (Dizi Metodları):** JavaScript, dizilerle çalışmak için bir dizi gömülü metod
   sunar. ``push()``, ``pop()``, ``shift()``, ``unshift()``, ``slice()``, ``indexOf()`` gibi metodlar, dizilerde ekleme,
   çıkarma, kesme ve arama işlemleri yapmak için kullanılır.

Örnek:

```javascript
let colors = ["red", "green", "blue"];
colors.push("yellow"); // Dizinin sonuna "yellow" elemanını ekler.
let removedColor = colors.pop(); // Dizinin sonundaki elemanı çıkarır ve removedColor değişkenine atar.
let firstColor = colors.shift(); // Dizinin başındaki elemanı çıkarır ve firstColor değişkenine atar.
colors.unshift("orange"); // Dizinin başına "orange" elemanını ekler.
let slicedColors = colors.slice(1, 3); // Diziyi 1. indeksten 3. indekse kadar keser ve slicedColors değişkenine atar.
let indexOfBlue = colors.indexOf("blue"); // "blue" elemanının indeksini döndürür.
```

8. **Math():** Math nesnesi, matematiksel işlemler yapmak için bir dizi gömülü metod ve sabit
   içerir. ``Math.random()``, ``Math.round()``, ``Math.floor()``, ``Math.ceil()`` gibi metodlar sayesinde rastgele sayı
   üretimi, yuvarlama ve üst ve alt tamsayıya dönüşüm gibi işlemler gerçekleştirilebilir.

Örnek:

```javascript
let randomNumber = Math.random(); // 0 ile 1 arasında rastgele bir sayı üretir.
let roundedNumber = Math.round(3.7); // Değeri 4'e yuvarlar.
let floorNumber = Math.floor(4.9); // Değeri 4'e yuvarlar (alt tamsayıya dönüşüm).
let ceilNumber = Math.ceil(2.1); // Değeri 3'e yuvarlar (üst tamsayıya dönüşüm).
```

Gömülü JavaScript fonksiyonları, programlamayı kolaylaştırır ve çeşitli işlemleri hızlı bir şekilde gerçekleştirmeyi
sağlar. Bu fonksiyonlar, temel işlemlerden daha karmaşık işlemlere kadar geniş bir yelpazede kullanılabilir.

### Nesne Tabanlı Programlama

JavaScript, nesne tabanlı programlamayı (Object-Oriented Programming - OOP) destekleyen bir programlama dilidir. Nesne
tabanlı programlama, programlamayı nesneler ve sınıflar gibi yapılara dayandıran bir paradigmadır. Bu yaklaşım,
programları daha modüler, esnek ve anlaşılır hale getirir ve büyük projelerin daha kolay yönetilmesini sağlar.
JavaScript'te nesne tabanlı programlama ile ilgili temel kavramları ve örnekleri inceleyelim:

1. **Nesneler ve Sınıflar:** Nesne tabanlı programlamada, gerçek dünyadaki varlıkları ve kavramları temsil etmek için
   nesneler ve sınıflar kullanılır. Bir sınıf, belirli bir nesne tipinin özelliklerini ve davranışlarını tanımlayan bir
   şablondur. Nesneler ise bu sınıflardan türetilen örneklerdir.

2. **Nesnelerin Özellikleri (Properties):** Nesnelerin özellikleri, nesnenin durumunu ve özelliklerini tanımlayan
   değişkenlerdir. Bu özellikler, sınıfta tanımlanan özelliklere göre değişebilir.

3. **Nesnelerin Davranışları (Methods):** Nesnelerin davranışları, nesnelerin üzerinde gerçekleştirilen işlevleri ifade
   eden fonksiyonlardır. Bu davranışlar, sınıfta tanımlanan metotlara göre değişebilir.

4. **Kalıtım (Inheritance):** Kalıtım, bir sınıfın başka bir sınıftan özelliklerini ve davranışlarını devralmasıdır. Bu,
   kod tekrarını azaltır ve sınıflar arasında ilişkiler kurmayı sağlar

5. **Kapsülleme (Encapsulation):** Kapsülleme, nesnelerin özelliklerini ve davranışlarını gizlemeyi ve sadece belirli
   yöntemlerle erişilebilir hale getirmeyi sağlar. Bu, verilerin ve işlevlerin dış müdahaleye karşı korunmasını sağlar.

6. **Polimorfizm (Polymorphism):** Polimorfizm, aynı isimli metotların farklı sınıflar tarafından farklı şekillerde
   uygulanmasını ifade eder. Bu, aynı metot adının farklı bağlamlarda kullanılabilmesini sağlar.

Örnek:
Aşağıda JavaScript'te nesne tabanlı programlamayı basit bir örnekle açıklayalım:

```javascript
// Sınıf tanımı
class Araba {
    constructor(marka, model, yil) {
        this.marka = marka;
        this.model = model;
        this.yil = yil;
    }

    bilgileriGoster() {
        console.log("Marka: " + this.marka + ", Model: " + this.model + ", Yıl: " + this.yil);
    }

    hareketEt() {
        console.log("Araba hareket ediyor.");
    }
}

// SporAraba sınıfı (Araba sınıfından kalıtım)
class SporAraba extends Araba {
    constructor(marka, model, yil, maksimumHiz) {
        super(marka, model, yil);
        this.maksimumHiz = maksimumHiz;
    }

    hareketEt() {
        console.log("Spor araba hızlı bir şekilde hareket ediyor.");
    }

    drifYap() {
        console.log("Spor araba drif yapıyor!");
    }
}

// SedanAraba sınıfı (Araba sınıfından kalıtım)
class SedanAraba extends Araba {
    constructor(marka, model, yil, otomatikVites) {
        super(marka, model, yil);
        this.otomatikVites = otomatikVites;
    }

    hareketEt() {
        console.log("Sedan araba konforlu bir şekilde hareket ediyor.");
    }

    bagajAc() {
        console.log("Sedan araba bagajı açıyor.");
    }
}

// Araba nesnesi oluşturma
let arabam = new Araba("Toyota", "Corolla", 2022);
arabam.bilgileriGoster(); // Çıktı: Marka: Toyota, Model: Corolla, Yıl: 2022
arabam.hareketEt(); // Çıktı: Araba hareket ediyor.

// SporAraba nesnesi oluşturma
let sporAraba = new SporAraba("Ferrari", "458 Italia", 2023, 320);
sporAraba.bilgileriGoster(); // Çıktı: Marka: Ferrari, Model: 458 Italia, Yıl: 2023
sporAraba.hareketEt(); // Çıktı: Spor araba hızlı bir şekilde hareket ediyor.
sporAraba.drifYap(); // Çıktı: Spor araba drif yapıyor!

// SedanAraba nesnesi oluşturma
let sedanAraba = new SedanAraba("Honda", "Civic", 2022, true);
sedanAraba.bilgileriGoster(); // Çıktı: Marka: Honda, Model: Civic, Yıl: 2022
sedanAraba.hareketEt(); // Çıktı: Sedan araba konforlu bir şekilde hareket ediyor.
sedanAraba.bagajAc(); // Çıktı: Sedan araba bagajı açıyor.
```

Bu örnekte, "Araba" sınıfı, temel araba özelliklerini ve davranışlarını tanımlar. "SporAraba" ve "SedanAraba"
sınıfları, "Araba" sınıfından kalıtım alarak kendilerine özgü özellikler ve davranışlar ekler. Bu sayede, farklı araba
türlerini temsil eden nesneler oluşturabilir ve her bir nesne için özel davranışlar çağırabiliriz. Kalıtım sayesinde kod
tekrarını önler ve farklı araba türleri arasında benzerlikleri koruruz.

### Diziler

Diziler, JavaScript'te birden fazla değeri saklamak için kullanılan veri yapılarıdır. Diziler, aynı türdeki veya farklı
türdeki verileri bir arada tutabilir ve bu verilere indeks numaraları ile erişim sağlar. JavaScript dizileri, dinamik
boyutlara sahiptir, yani boyutlarını başlangıçta belirtmek zorunda değilsiniz. Diziler, programlama sürecinde verileri
düzenlemek, depolamak ve yönetmek için yaygın olarak kullanılır.

1. **Dizi Oluşturma:** Diziler, köşeli parantezler [] içine verileri virgülle ayırarak oluşturulur. Boş bir dizi
   oluşturmak için [] kullanabilir veya başlangıçta elemanlarla doldurabilirsiniz.

Örnek:

```javascript
let emptyArray = []; // Boş bir dizi oluşturma
let numbers = [1, 2, 3, 4, 5]; // Elemanlarla dolu bir dizi oluşturma
let fruits = ["apple", "banana", "orange"]; // Dizi içinde metinsel değerler
```

2. **Dizi Elemanlarına Erişim:** Dizi elemanlarına indeks numaraları ile erişebiliriz. İndeks numaraları 0'dan başlar ve
   dizinin uzunluğu - 1 kadar olur.

Örnek:

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Çıktı: 1
console.log(numbers[3]); // Çıktı: 4
```

3. **Dizi Uzunluğu:** Dizinin eleman sayısını öğrenmek için length özelliğini kullanabiliriz.

Örnek:

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // Çıktı: 3
```

4. **Dizi Elemanlarını Değiştirme:** Dizi elemanlarını belirli bir indekste değiştirmek için atama yapabiliriz.

Örnek:

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers[2] = 10; // 3. elemanı 10 ile değiştirir
console.log(numbers); // Çıktı: [1, 2, 10, 4, 5]
```

5. **Diziye Eleman Ekleme ve Silme:**

* ``push()``: Dizinin sonuna yeni bir eleman ekler.
* ``pop()``: Dizinin sonundaki elemanı çıkarır.
* ``unshift()``: Dizinin başına yeni bir eleman ekler.
* ``shift()``: Dizinin başındaki elemanı çıkarır.

Örnek:

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.push("grape"); // Dizinin sonuna "grape" elemanını ekler
fruits.pop(); // Dizinin sonundaki "grape" elemanını çıkarır
fruits.unshift("pear"); // Dizinin başına "pear" elemanını ekler
fruits.shift(); // Dizinin başındaki "pear" elemanını çıkarır
```

6. **Dizi Metotları:** JavaScript dizileri için bir dizi metotu bulunur. Bu metotlar dizi üzerinde çeşitli işlemleri
   yapmaya yardımcı olur. Örneğin, concat(), slice(), join(), sort(), reverse(), map() gibi metotlar dizi üzerinde
   işlemler yapar ve yeni diziler oluşturur.

Örnek:

```javascript
let numbers = [3, 1, 5, 2, 4];
let sortedNumbers = numbers.sort(); // Diziyi sıralar: [1, 2, 3, 4, 5]
let slicedNumbers = numbers.slice(1, 3); // Diziyi keser: [2, 3]
let joinedNumbers = numbers.join("-"); // Diziyi birleştirir: "1-2-3-4-5"
```

7. **Dizi Döngüleri:** Dizileri elemanlar üzerinde döngü ile işlemek için for, forEach(), map() gibi döngü yapıları
   kullanılabilir.

Örnek:

```javascript
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(function (fruit) {
    console.log(fruit);
});

let upperCaseFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase();
});
```

### DOM Nedir

JavaScript, web sayfalarının içeriği ve yapısını programlı bir şekilde değiştirmek ve etkileşim sağlamak için kullanılan
güçlü bir araç olan DOM (Document Object Model) ile entegre çalışır. DOM, HTML ve XML belgelerini bir nesne koleksiyonu
olarak temsil eden bir yapıdır. Web tarayıcıları, bir web sayfasını yüklediğinizde, bu sayfanın içeriğini DOM ağacı
olarak oluşturur ve JavaScript, bu ağaç üzerinde işlem yapabilir.

DOM, web sayfasının her bir öğesini (element) bir nesne olarak temsil eder ve bu öğelere erişerek içeriklerini
değiştirebilir veya özelliklerini kontrol edebiliriz. DOM, web sayfalarında gezinme, içerik ekleyip çıkarma, stil
değişiklikleri yapma, etkileşimli olaylar eklemek gibi birçok işlemi mümkün kılar.

Örnek bir DOM ağacı şu şekildedir:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Örnek</title>
</head>
<body>
<div id="main-container">
    <h1>Merhaba, DOM!</h1>
    <p>Bu bir örnek paragraf.</p>
    <ul>
        <li>Öğe 1</li>
        <li>Öğe 2</li>
        <li>Öğe 3</li>
    </ul>
</div>
</body>
</html>
```

**DOM ile Yapılabilecekler:**

1. **Element Seçme ve Manipülasyon:** DOM ile HTML öğelerini seçebilir, içeriklerini değiştirebilir, özelliklerini
   kontrol edebilir veya yeni öğeler oluşturabiliriz.

Örnek:

```javascript
let heading = document.querySelector("h1");
heading.textContent = "Merhaba, DOM Değişti!";

let paragraph = document.createElement("p");
paragraph.textContent = "Bu da yeni bir paragraf.";
document.body.appendChild(paragraph);
```

2. **Stil Değişiklikleri:** DOM ile CSS özelliklerini değiştirebilir ve sayfanın görünümünü güncelleyebiliriz.

Örnek:

```javascript
let element = document.querySelector("#main-container");
element.style.backgroundColor = "lightblue";
element.style.fontSize = "20px";
```

3. **Olaylar ve Etkileşim:** DOM ile olay dinleyiciler ekleyerek sayfadaki etkileşimleri takip edebiliriz.

Örnek:

```javascript
let button = document.querySelector("#my-button");
button.addEventListener("click", function () {
    alert("Butona tıklandı!");
});
```

4. **DOM Gezinme:** DOM ağacında gezinerek belirli öğeleri bulabilir ve onlar üzerinde işlemler yapabiliriz.

Örnek:

```javascript
let listItems = document.querySelectorAll("li");
listItems.forEach(function (item) {
    item.style.color = "red";
});
```

DOM, web sayfalarını etkileşimli ve dinamik hale getirmek için önemli bir araçtır. JavaScript kullanarak DOM'u anlamak
ve etkin bir şekilde kullanmak, web geliştirme sürecinde çok değerli bir yetenektir.

### HTML Olayları Nedir

HTML olayları, web sayfalarında kullanıcı etkileşimlerini ve diğer olayları (örneğin, yükleme, fare tıklaması, klavye
tuşlarına basma vb.) yakalayan ve işleyen JavaScript kodlarıdır. Olaylar, kullanıcıların web sayfalarında etkileşime
girmesini sağlar ve web sayfasının dinamik ve etkileşimli olmasını mümkün kılar. JavaScript, HTML içinde tanımlanan
olaylara tepki vererek belirli işlemleri gerçekleştirir.

HTML Olayları Kullanımı:

1. **Olay İşleyici Ekleme:** HTML elementlerine olayları işleyecek JavaScript fonksiyonlarını eklemek için HTML
   etiketlerinde on önekini kullanırız. Örneğin, bir düğmeye tıklandığında bir işlev çağırmak için onclick
   kullanabiliriz.

Örnek:

```html

<button onclick="myFunction()">Tıkla</button>
```

2. **Olay İşleyici Fonksiyonu Tanımlama:** JavaScript kodunda olay işleyici fonksiyonlarını tanımlayarak, olayı daha
   esnek bir şekilde işleyebiliriz.

Örnek:

```html

<button id="myButton">Tıkla</button>
<script>
    function myFunction() {
        alert("Düğmeye tıklandı!");
    }

    document.getElementById("myButton").onclick = myFunction;
</script>
```

3. **addEventListener() Metodu:** addEventListener() metodu, bir elemente olay dinleyicisi eklemek için kullanılır ve
   daha esnek bir yöntem sağlar.

Örnek:

```html

<button id="myButton">Tıkla</button>
<script>
    document.getElementById("myButton").addEventListener("click", function () {
        alert("Düğmeye tıklandı!");
    });
</script>
```

4. **Olay Nesnesi:** Olay işleyicileri, olayın detaylarını içeren bir olay nesnesi ile birlikte çalışır. Bu nesne,
   olayla ilgili bilgilere erişmemizi sağlar.

Örnek:

```html

<button id="myButton">Tıkla</button>
<script>
    document.getElementById("myButton").addEventListener("click", function (event) {
        alert("Tıklanan düğme: " + event.target.id);
    });
</script>
```

5. **Olaylar ve Formlar:** Formlar, kullanıcı verilerini toplamak için önemli bir HTML elementidir. Olay işleyicileri
   ile formlarda verileri doğrulayabilir ve gönderebiliriz.

Örnek:

```html

<form id="myForm">
    <input type="text" name="username" required>
    <input type="submit" value="Gönder">
</form>
<script>
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Formun varsayılan davranışını engeller (sayfa yenileme)
        let username = event.target.username.value;
        alert("Merhaba, " + username + "!");
    });
</script>
```

JavaScript ile HTML olayları kullanarak, web sayfalarında kullanıcı etkileşimlerini yakalayabilir ve kullanıcılara daha
iyi bir deneyim sunabiliriz. Olayları yakalamak ve işlemek, web sayfalarını dinamik, etkileşimli ve verimli hale
getirmede önemli bir rol oynar.

### Window Nesnesi Nedir

Window nesnesi, JavaScript içinde en üst düzeyde bulunan ve tarayıcı penceresini temsil eden global bir nesnedir.
Tarayıcı ortamında çalıştırılan JavaScript, window nesnesine erişim sağlar ve bu nesne sayesinde tarayıcı penceresine
yönelik çeşitli işlemler gerçekleştirebilir. Window nesnesi, tarayıcıda açılan her yeni sekme veya pencere için ayrı bir
nesneyi temsil eder ve tüm tarayıcı işlemlerine erişim imkanı sağlar.

Window Nesnesinin Özellikleri ve Metotları:

1. **document:** Window nesnesinin en önemli özelliklerinden biri document özelliğidir. Bu özellik, tarayıcı
   penceresinin içeriğini temsil eden Document nesnesine erişim sağlar.

Örnek:

```javascript
console.log(window.document); // Tarayıcı penceresinin Document nesnesi
```

2. **open() ve close() Metotları:** Window nesnesi, open() ve close() metotları ile yeni tarayıcı pencereleri açabilir
   ve mevcut pencereleri kapatabilir.

Örnek:

```javascript
let yeniPencere = window.open("https://www.example.com", "_blank");
yeniPencere.close(); // Yeni pencereyi kapatır
```

3. **setTimeout() ve setInterval() Metotları:** Window nesnesi, belirli bir süre sonra bir işlem yapmak veya belirli
   aralıklarla bir işlemi tekrarlamak için setTimeout() ve setInterval() metotlarını kullanır.

Örnek:

```javascript
function mesajGoster() {
    console.log("Merhaba, dünya!");
}

setTimeout(mesajGoster, 3000); // 3 saniye sonra "Merhaba, dünya!" mesajını gösterir
setInterval(mesajGoster, 2000); // 2 saniyede bir "Merhaba, dünya!" mesajını gösterir
```

4. **location Özelliği:** Window nesnesinin location özelliği, tarayıcı penceresinin URL'sini temsil eder ve sayfayı
   yönlendirmek için kullanılır.

Örnek:

```javascript
console.log(window.location.href); // Mevcut sayfanın URL'sini alır
window.location.href = "https://www.example.com"; // Yeni bir sayfaya yönlendirir
```

5. **alert(), confirm() ve prompt() Metotları:** Window nesnesi, alert(), confirm() ve prompt() metotları ile
   kullanıcıya mesajlar gösterip, onlardan veri alabilir.

Örnek:

```javascript
alert("Bu bir uyarı mesajıdır.");
let onay = confirm("Emin misiniz?");
let isim = prompt("Adınız nedir?", "John Doe");
```

6. **resizeTo() ve moveTo() Metotları:** Window nesnesi, resizeTo() ve moveTo() metotları ile tarayıcı penceresinin
   boyutunu ve konumunu değiştirebilir.

Örnek:

```javascript
window.resizeTo(800, 600); // Pencere boyutunu 800x600 piksele ayarlar
window.moveTo(100, 100); // Pencereyi (100, 100) konumuna taşır
```

Window nesnesi, JavaScript'te tarayıcıyla etkileşim sağlamak için çok önemli bir rol oynar. Sayfa yönlendirme, yeni
pencereler açma, zamanlayıcılar oluşturma, kullanıcı etkileşimleri yönetme ve tarayıcı özelliklerine erişim gibi birçok
işlemi yönetmemizi sağlar. Tarayıcı tabanlı JavaScript uygulamaları geliştirirken window nesnesini doğru bir şekilde
kullanmak, web sayfalarını daha etkileşimli ve kullanıcı dostu hale getirmemize yardımcı olur.

### Navigator Nesnesi Nedir

Navigator nesnesi, JavaScript içinde bulunan ve tarayıcı hakkında bilgi sağlayan global bir nesnedir. Bu nesne, tarayıcı
ile ilgili bilgileri ve kullanıcı cihazıyla ilgili bazı özellikleri içerir. Tarayıcıda çalışan JavaScript kodları,
navigator nesnesine erişerek, kullanıcının cihazı, tarayıcısı ve kullanılabilir özellikler hakkında bilgi alabilir.

Navigator Nesnesinin Bazı Özellikleri:

1. **appName:** Tarayıcının adını alır. Genellikle "Netscape" veya "Microsoft Internet Explorer" gibi değerlere
   sahiptir.

Örnek:

```javascript
console.log(navigator.appName); // Tarayıcının adını yazdırır
```

2. **appVersion:** Tarayıcının sürüm bilgisini alır.

Örnek:

```javascript
console.log(navigator.appVersion); // Tarayıcının sürüm bilgisini yazdırır
```

3. **userAgent:** Tarayıcının kullanıcı ajanını alır. Tarayıcının ve işletim sisteminin bilgisini içerir.

Örnek:

```javascript
console.log(navigator.userAgent); // Kullanıcı ajanını yazdırır
```

4. **platform:** Kullanıcının işletim sistemini alır. Örneğin, "Win32", "MacIntel", "iPhone", "Android" gibi değerler
   olabilir.

Örnek:

```javascript
console.log(navigator.platform); // İşletim sistemini yazdırır
```

5. **language ve languages:** Kullanıcının tercih ettiği dil bilgisini alır. language özelliği tek bir dil kodunu,
   languages özelliği ise tarayıcının desteklediği tüm dilleri dizi olarak verir.

Örnek:

```javascript
console.log(navigator.language); // Kullanıcının tercih ettiği dil kodunu yazdırır
console.log(navigator.languages); // Tarayıcının desteklediği tüm dilleri yazdırır
```

6. **cookieEnabled:** Kullanıcının tarayıcısında çerezlerin etkin olup olmadığını belirten bir boolean değer alır.

Örnek:

```javascript
console.log(navigator.cookieEnabled); // Çerezlerin etkin olup olmadığını yazdırır
```

Navigator nesnesi, JavaScript içinde tarayıcı hakkında bilgi edinmenin ve bazı tarayıcı özelliklerine erişmenin kolay
bir yoludur. Bu bilgiler, web sitelerinin ziyaretçilere uygun içerik sunmasını, kullanıcı deneyimini geliştirmesini ve
tarayıcı uyumluluğunu sağlamasını kolaylaştırır. Ancak, kullanıcı ajanı gibi bilgilerin güvenilirliği, tarayıcı
tarafından değiştirilebileceği için dikkatli bir şekilde kullanılmalıdır.

### Screen Nesnesi Nedir

Screen nesnesi, JavaScript içinde bulunan ve kullanıcının ekranı hakkında bilgi sağlayan global bir nesnedir. Bu nesne,
kullanıcının ekranı ile ilgili özellikleri içerir ve kullanıcı ekranının boyutları, piksel yoğunluğu gibi bilgileri
almak için kullanılır. Screen nesnesi, web sayfalarını daha iyi bir şekilde düzenlemek ve kullanıcı cihazına uygun
içerik sunmak için önemli bir araçtır.

Screen Nesnesinin Bazı Özellikleri:

1. **width ve height:** Ekranın genişliğini ve yüksekliğini piksel cinsinden alır.

Örnek:

```javascript
console.log(screen.width); // Ekranın genişliğini yazdırır
console.log(screen.height); // Ekranın yüksekliğini yazdırır
```

2. **availWidth ve availHeight:** Kullanılabilir ekran alanının genişliğini ve yüksekliğini piksel cinsinden alır.
   Taskbar ve diğer arayüz öğeleri tarafından işgal edilmemiş alanı ifade eder.

Örnek:

```javascript
console.log(screen.availWidth); // Kullanılabilir ekran alanının genişliğini yazdırır
console.log(screen.availHeight); // Kullanılabilir ekran alanının yüksekliğini yazdırır
```

3. **colorDepth:** Ekranın renk derinliğini (bir pikselde kaç bit rengin depolandığını) alır.

Örnek:

```javascript
console.log(screen.colorDepth); // Ekranın renk derinliğini yazdırır
```

4. **pixelDepth:** Ekranın piksel derinliğini (bir pikselde kaç bitin kullanıldığını) alır. colorDepth ile aynı değeri
   verir.

Örnek:

```javascript
console.log(screen.pixelDepth); // Ekranın piksel derinliğini yazdırır
```

5. **orientation:** Kullanıcının cihazının ekran yönlendirmesini belirten bir nesne alır. Bu özellik, mobil cihazlarda
   yararlıdır.

Örnek:

```javascript
console.log(screen.orientation); // Ekran yönlendirmesini yazdırır (örn: landscape-primary, portrait-secondary)
```

Screen nesnesi, web sayfalarının kullanıcı cihazlarına uygun bir şekilde düzenlenmesi için önemli bilgiler sağlar. Bu
bilgiler, sayfaların mobil uyumluluğunu, ekran boyutlarına uygun arayüzlerin tasarlanmasını ve kullanıcılara daha iyi
bir deneyim sunulmasını sağlar. Özellikle, responsive (duyarlı) web tasarım için kullanıcı ekran özelliklerini anlamak
ve kullanmak, modern web geliştirmenin önemli bir parçasıdır.

### Location Nesnesi Nedir

Location nesnesi, JavaScript içinde bulunan ve tarayıcı penceresinin URL'si (Uniform Resource Locator) ile ilgili
bilgiler sağlayan global bir nesnedir. Bu nesne, tarayıcıda açık olan sayfanın URL'si ve URL içindeki parçaları temsil
eder. JavaScript, location nesnesine erişerek tarayıcı URL'sini okuyabilir ve değiştirebilir, sayfa yönlendirmeleri
yapabilir ve URL içindeki parametreleri alabilir.

Location Nesnesinin Bazı Özellikleri ve Metotları:

1. **href:** Tarayıcı penceresinin URL'sini alır veya değiştirir. Sayfayı yönlendirmek veya yeni bir sayfaya
   yönlendirmek için kullanılabilir.

Örnek:

```javascript
console.log(location.href); // Tarayıcının URL'sini yazdırır
location.href = "https://www.example.com"; // Yeni bir sayfaya yönlendirir
```

2. **origin:** Sayfanın kökenini (protocol, domain ve port) alır.

Örnek:

```javascript
console.log(location.origin); // Sayfanın kökenini yazdırır (örn: "https://www.example.com")
```

3. **protocol:** Sayfanın protokolünü (http, https vb.) alır veya değiştirir.

Örnek:

```javascript
console.log(location.protocol); // Sayfanın protokolünü yazdırır (örn: "https:")
location.protocol = "http:"; // Sayfanın protokolünü http olarak değiştirir
```

4. **host:** Sayfanın sunucu adını ve portunu alır veya değiştirir.

Örnek:

```javascript
console.log(location.host); // Sayfanın sunucu adı ve portunu yazdırır (örn: "www.example.com:8080")
location.host = "www.example.com"; // Sayfanın sunucu adını ve portunu değiştirir
```

5. **hostname:** Sayfanın sunucu adını (port olmadan) alır veya değiştirir.

Örnek:

```javascript
console.log(location.hostname); // Sayfanın sunucu adını yazdırır (örn: "www.example.com")
location.hostname = "www.example.com"; // Sayfanın sunucu adını değiştirir
```

6. **pathname:** Sayfanın yolunu (domain sonrası) alır veya değiştirir.

Örnek:

```javascript
console.log(location.pathname); // Sayfanın yolunu yazdırır (örn: "/products/index.html")
location.pathname = "/new-page.html"; // Sayfanın yolunu değiştirir
```

7. **search:** Sayfanın sorgu parametrelerini alır veya değiştirir.

Örnek:

```javascript
console.log(location.search); // Sayfanın sorgu parametrelerini yazdırır (örn: "?id=123&name=example")
location.search = "?page=2"; // Sayfanın sorgu parametrelerini değiştirir
```

8. **hash:** Sayfanın URL'sindeki anker (hash) kısmını (yani # sonrasını) alır veya değiştirir.

Örnek:

```javascript
console.log(location.hash); // Sayfanın anker (hash) kısmını yazdırır (örn: "#section1")
location.hash = "#section2"; // Sayfanın anker (hash) kısmını değiştirir
```

Location nesnesi, tarayıcı penceresinin URL'siyle ilgili bilgilere erişmek ve bu bilgileri değiştirmek için kullanılır.
Sayfa yönlendirmeleri, URL manipülasyonları ve parametre işlemleri gibi birçok işlemi gerçekleştirmede önemli bir role
sahiptir. Bu nedenle, modern web uygulamaları geliştirirken location nesnesini etkin bir şekilde kullanmak, kullanıcı
deneyimini artırmada ve sayfa gezintisini yönetmede önemlidir.