# Avatio

UI for creating your own avatar. All application is VueJS 2 based and is online for free use at https://avatio.cool.
Original vector illustrations are designed by [Teneresa](https://github.com/teneresa).

This is the web and selector UI, there are also 2 other repositories

1. [Avatar](https://github.com/trunda/avatio-avatar) - VueJs component to display avatar's svg code based on options and configuration.
2. [Server](https://github.com/trunda/avatio-server) - VueJs SSR server which is able to render SVG and PNG image based on query parameters ([like this](https://img.avatio.cool/avatar.svg?sex=Female&options%5BFemaleHeadShape%5D%5Bcolor%5D=%23FBD2B4&options%5BEyes%5D%5Btype%5D=C&options%5BEyes%5D%5Bcolor%5D=%23A6B6C2&options%5BMouth%5D%5Btype%5D=A&options%5BMouth%5D%5Bcolor%5D=%23AE0923&options%5BFemaleHair%5D%5Btype%5D=E&options%5BFemaleHair%5D%5Bcolor%5D=%232C222B&options%5BFemaleGlasses%5D%5Btype%5D=B&options%5BFemaleGlasses%5D%5Bcolor%5D=%23c0392b&options%5BFemaleClothes%5D%5Btype%5D=F&options%5BFemaleClothes%5D%5Bcolor%5D=%23bdc3c7&options%5BFemaleClothes%5D%5BsecondaryColor%5D=%2327ae60&options%5BFemaleAccessory%5D%5Btype%5D=A&options%5BFemaleAccessory%5D%5Bcolor%5D=%23FFFFFF&options%5BNose%5D%5Bcolor%5D=%23ef843b) or [this](https://img.avatio.cool/avatar.png?sex=Female&options%5BFemaleHeadShape%5D%5Bcolor%5D=%23FBD2B4&options%5BEyes%5D%5Btype%5D=C&options%5BEyes%5D%5Bcolor%5D=%23A6B6C2&options%5BMouth%5D%5Btype%5D=A&options%5BMouth%5D%5Bcolor%5D=%23AE0923&options%5BFemaleHair%5D%5Btype%5D=E&options%5BFemaleHair%5D%5Bcolor%5D=%232C222B&options%5BFemaleGlasses%5D%5Btype%5D=B&options%5BFemaleGlasses%5D%5Bcolor%5D=%23c0392b&options%5BFemaleClothes%5D%5Btype%5D=F&options%5BFemaleClothes%5D%5Bcolor%5D=%23bdc3c7&options%5BFemaleClothes%5D%5BsecondaryColor%5D=%2327ae60&options%5BFemaleAccessory%5D%5Btype%5D=A&options%5BFemaleAccessory%5D%5Bcolor%5D=%23FFFFFF&options%5BNose%5D%5Bcolor%5D=%23ef843b)). 

## Project setup

After you clone the repository

```
yarn install
```

And then you can compile and hot-reload changes for development
```
yarn run serve
```

Compile and minifie for production is done by
```
yarn run build
```
