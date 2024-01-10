# Resources

https://www.youtube.com/watch?v=MSq_DCRxOxw&list=PLc-glsRnopxSAhNt24V4ch19LUqmNhMAm&index=21(DONE)
https://www.youtube.com/watch?v=MdvzlDIdQ0o&list=PLc-glsRnopxSAhNt24V4ch19LUqmNhMAm&index=22(DONE)
https://www.youtube.com/watch?v=ANrYhHN8Dl4(Folder structure)(DONE)
https://www.youtube.com/watch?v=-yIsQPp31L0&list=PLc-glsRnopxSAhNt24V4ch19LUqmNhMAm&index=23(DONE)
https://www.youtube.com/watch?v=PisA-OPisUY&list=PLc-glsRnopxSAhNt24V4ch19LUqmNhMAm&index=25(DONE)
https://www.youtube.com/watch?v=4FhJkX18fS8&list=PLc-glsRnopxSAhNt24V4ch19LUqmNhMAm&index=32(DONE)


# Notes
S.O.L.I.D: Clean code means `Readable`, `Maintainable`, and `testable` code and to achieve this you should: 

1. `Single responsabilty` et prend en considiration qu'ils devrons facile a tester: 
    .Chaque `fonction` ou `composantJSX` doit faire un seul `traitement` ou afficher un seul `composantJSX`
    .Un composant doit `traiter une seul chose`, soit il affiche du `JSX` soit une `fonction ou un custome hook` q fait `un seul traitement`
    .Whenever you see a component contains useState and useEffect it always a best practice to use a custome hook


2. `Separation`: 
    `Page Component`: JSX a afficher aux utilisateurs;
    `Features Component`: Component that handle something, Per ex: `validation`, `Fusion`, `onClick Calculation` and any other traitment;
    `UI Component`: <Button />, <TextInput />, <Table />, <Alert />.....;

    `Example`
        1. UI(Folder) > Button.TSX
        2. Features > DeleteUser.tsx (contient <Button /> + faire le traitemen de supprission)
        3. Page > affiche le button <DeleteButton />



3. `Open-Close Principal`: 
    .Open for extension, and closed for modification
    .Concevez votre code de manière à vous permettre d'ajouter de nouvelles fonctionnalités sans modifier le code existant

4. `liskov substitution`
    EX: 
    // Good example following Liskov Substitution Principle with React

    import React from 'react';

    // Base component
    const ShapeComponent = ({ calculateArea }) => (
    <div>
        <h2>Area: {calculateArea()}</h2>
    </div>
    );

    // Derived component - Rectangle
    const RectangleComponent = ({ width, height }) => (
    <ShapeComponent
        calculateArea={() => width * height}
    />
    );

    // Derived component - Square
    const SquareComponent = ({ side }) => (
    <ShapeComponent
        calculateArea={() => side * side}
    />
    );



# Folder structure
# inside our scr folder:

1. `pages`: LoginePage, DashbordPage, ClientPage, SupplierPage, ProductListPage, ProductPage, NotFoundPage... (en général ce sont les pages sur lesquelles l'utilisateur naviguera)

2. `components`:
     `Root Folder`: Features Components like, DeleteUser, FilterProduct... etc
     `UI folder`: Button.tsx, InputText.tsx, Form.tsx... etc

3. `hooks`: Stock toutes no custom hooks

4. `services`: 
    .Par exemple dans le cas ou on a utilisé un API externe pour avoir les codes posteaux de la france sur le projet CBC de Cegid
    .La fusion des champs #nom.client, #{DC} ... etc, la meme fonction mais il est utiliser pour deferent context de notre appli
    .Third party, par exemple si nous utilison un service qui gere l'authentification de notre app e.g `MSAL` de microsoft
    .`i18n` package si notre application utilises deferentes language
    .`Redux` ou un autre state manager librerie vous utilisez 

5. `utils`: on put ici des petite composant qui font un petit service a notre app par exemple: 
    .`un folder formating` qui `format la date, un string, un retourne`
    .`un loading specifique` 
    .`fonctions helpers` qui m'aide et je suis sur qu'il y une probabilité de réutiliser, peut etre que ces helpers font apelle a d'autre exerne librarie  ...etc 

7. `Types`: pour les types de Typescript

6. `Les Tests et CSS`: saoit separement soit dans le meme dossier(ca depend )


# Notes 

1. `In useEffect`, vous devrais pas ajouter un object au tableau de dependence car a chaque rendu on va avoir une nouvelle reference de tableau meme sa valeur n'a pas ete changer, du coup useEffect ce sera toujours excuter

2. `Typescript` `Initialyze` `object` and `array` when we create a state with useState:
    
    2.1 TypeScript can determine that the type of state should be an array of the type specified by IState. This inference works because an empty array is compatible with any array type.

    2.2 However, when dealing with objects, TypeScript can be more strict in its type inference, and initializing with an empty object might not work as expected.

3. `new AbortController()` et on utilise le signal:
    const controller = new AbortController()
    fetch("URL", {
        signal: controller.signal
    })
    .then()
    .then()
    .catch()

    This is particularly useful in scenarios where you want to cancel or abort a network request or any other asynchronous operation if it's no longer needed or if the user decides to cancel it.


4. Whenever you have a state ask yourseflf where this state should be placed, and take in considiration that not rernder the whole component only because this state has been changed, the component that should rerender is the component need this state

5. Try always to secure your important fuction with typescript, separate thgese function and give them the types that should accept, in this case when someone call these function, if he don't passe the correct params, it will give him errors