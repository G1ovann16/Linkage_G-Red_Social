## Comenzando 🚀

_El presente proyecto está enfocado al público; el mismo se tratará de una Red Social, en la cuál el cliente podrá realizar publicaciones con la temática que crea conveniente, podra hacerse de amigos, teniendo esto como fin o al menos uno de ellos, que se sienta en su zona de confort y pueda apreciar a personas que piensan o crean de manera similar. Se le dará la opcion de editar su pérfil; al cual tendra asceso todo aquel que lo quiera seguir. Adelante con su PUBLICACIÓN._
    ![LINKAGE-G LANDING](http://glandaburo.online/landing.png)
      **PAGE Landing**


  ### FRONTEND

  ### Instalación de este proyecto 🔧
https://github.com/G1ovann16/Linkage_G-Red_Social
_El proposito de este proyecto es que le sea util al usuario y que sirva de inspiracion a otros desarrolladores para poder colaborar en est mundo digital. A continuacio nse les dara los pasos ecsarios para dejarle listo su ambiente de trabajo._

### Instalación 🔧    
``` npm install
    ng new [Proyecto]
    ng generate components nombre del componente[con su ruta, por default seria sobre app]   o
    ng g c container/Home
    ng g s [crea el servicio]
    ng serve
 ```
## DEVELOPED WITH 🛠️


* [Angular CLI](https://github.com/angular/angular-cli) version 9.1. _Este proyecto fue generado con esta herramienta, en el enlace puede acceder a su documentación. Es válido destacar que se generan con la misma los diferentes componentes, servicios, contenedores, etc que se utilizaron_
*[Boostrap](https://getbootstrap.com/docs/4.5/getting-started) _Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page._
 ## Extras
*[AntDesign](https://ng.ant.design/docs/getting-started/) _Ant Design of Angular is dedicated to providing a good development experience for programmers._
*[Momentjs](https://momentjs.com/)_To validate, manipulate, and display dates and times in JavaScript._
*[NPMJS=>Ngx_pagination](https://www.npmjs.com/package/ngx-pagination)
 
 
 ![LINKAGE-G HOME](http://glandaburo.online/home.png)
  **PAGE Home**
  

### Instalación 🔧  
_Para la utilizacion de este proyecto usted debera recurrir a la siguiente ruta_  
*[LINKAG-G](https://github.com/G1ovann16/Linkage_G-Red_Social); _en el mismo se puede descargar o hacer un clon del repositorio una vez obtenido solo deberia bastarle con el siguiente comando:_

``` npm install
    ng serve --o
 ```

### Código a destacar
``` 
   getAllPosts(){
    this.postService.getAllPost()
    .subscribe(
      Posts => {
        console.log(Posts);
        this.allPost = Posts;
        for (let i = 0; i < this.allPost.length; i++) {
          this.comentList[i] = this.allPost[i].comments;
          this.data[i] = moment(this.allPost[i].created_at).fromNow();
        }
    },
     err => console.log(err)
    );
    }

``` 
_En este pequeño código se ha ce uan peticion GET a la base de datos donde se obtienen todos los creados post por usuarios, asi como sus respectivos likes y comentarios ._

### Link
```
link(name, id){
  localStorage.setItem('userActual', id);
  if (localStorage.getItem('User') === localStorage.getItem('userActual')){
  setTimeout(() => this.router.navigate(['profile']), 1000);
}else{
  setTimeout(() => this.router.navigate([`user/${name}`]), 1000); 
  }
}
```
_En este otro pequeño código se analiza a que usuario deseas acceder, si es usted mismo que por equivocaión toco, o bien que le era más cómodo en ese momento, accederá a su perfil en caso contrario pasaría a ver la informacion del usuario (sin poder realizar alguna modificación)_

![LINKAGE-G PROFILE](http://glandaburo.online/profile.png)
  **PAGE Profile**

### BACKEND

_Laravel is accessible, powerful, and provides tools required for large, robust applications_


## Construido con 🛠️


* [LARAVEL] - _The Laravel framework has a few system requirements. All of these requirements are satisfied by the Laravel Homestead virtual machine, so it's highly recommended that you use Homestead as your local Laravel development environment._.
<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

### Install este Proyecto 🔧    
_Para la utilizacion de este codigo bien puede tene un rntend realizado por usted o una ez descargado o clonado el repositorio deberia crear una base de datos la cual debe ponerse  en la localizacion .env:_

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=LinkageG
DB_USERNAME=root
DB_PASSWORD=
```
_En este caso hemos puesto el mismo nombre que nuestro proyecto_

``` 
    php artisan migrate:fresh --seed
    php artisan passport:install
    php artisan serve
 ```

 ### Código a destacar
``` 
   Route::prefix('users')->group(function () {
    Route::post('/register', 'UserController@register');
    Route::post('/login', 'UserController@login');
    Route::get('/userById/{id}', 'UserController@getUserById');
    Route::post('/addFollower', 'UserController@createFollower');
    Route::middleware('auth:api')->group(function(){
        Route::get('/logout/{id}', 'UserController@logout');
        Route::put('/update/{id}', 'UserController@update');
        Route::post('/updateProfile', 'UserController@editImageProfile');
    });
});
 
``` 
_En este pequeño se puede visualizar las rutas que tienen los diferentes endpoints creados, para el controlador de uauario, de las cuales, las de ser necesarias estan inmersas en la autentificación (regidas por el token) y a todas se acceden mediante users que s el prefijo indicado ._
```
  public function uploadImage(Request $request, $id)
    {
        try {
            $request->validate(['image' => 'required|image']);
            $post = Post::find($id);
            if($post->image){
            }
            if(Auth::id() !== $post->user_id){
                return response([
                    'message' => 'no eres tu descarado',
                ],200);
            }
            $imageName = time() . '-' . request()->image->getClientOriginalName();
            $request->image->move('images/posts', $imageName);
            $post->update(['image' => $imageName]);
            return response($post);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }
```
_Este coóigo no es más que una función que nos permite subir la imagen deseada por el usuario a la publicacion previamente creada._ 

 ![LINKAGE-G TABLE-RELATIONS](http://glandaburo.online/BaseDatos.png)
 **Data Base**

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/G1ovann16/E-Commerce/blob/master/README.md) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.


## Autor ✒️
* **Giovanni Landaburo Del Arco** - *Trabajo Inicial* - [glandaburo](https://github.com/G1ovann16)