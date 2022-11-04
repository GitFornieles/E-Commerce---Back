Consideraciones de cómo pensamos la lógica

1-Ruta de login
 El front pasa nickname y password
 Con esto recuperamos el usuario
 Controla si tiene un carrito pendiente o no
 Se manda al front el usuario y el carrito pendiente o un carrito vacío

2-Creación de usuario
 Consideramos que luego de la creación del usuario, el mismo deberá loguearse (no queda logueado cuando se termina el registro)

3-ESTADOS
 - Consideramos que el front tiene al menos los siguiente estados activos:
    -USER
    -CART

4-CARRITO
 - Charlar lógica de cómo interactuar