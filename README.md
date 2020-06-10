## Comenzando 🚀

_El presente proyecto está enfocado al público; el mismo se tratará de una Red Social, en la cuál el cliente podrá realizar publicaciones con la temática que crea conveniente, podra hacerse de amigos, teniendo esto como fin o al menos uno de ellos, que se sienta en su zona de confort y pueda apreciar a personas que piensan o crean de manera similar. Se le dará la opcion de editar su pérfil; al cual tendra asceso todo aquel que lo quiera seguir. Adelante con su PUBLICACIÓN._


  ### FRONTEND

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
### Instalación 🔧

_No requiere de instalación ya que posteriormente se crearán aplicaciones para los diversos sistemas operativos, teniendo la compatibildad adecuada._

### Pruebas de estilo de codificación ⌨️

_Se realizó diversos filtros que fueron capaz de poner a prueba la aplicación trayendo consigo unos resultados favorables, se le implementará umn formulario donde el usuario podra manifestrar sus inquietudes y de esa manera  mejor aun máas nuesto servicio_


## Construido con 🛠️


* [Angular CLI](https://github.com/angular/angular-cli) version 9.1. _Este proyecto fue generado con esta herramienta, en el enlace puede acceder a su documentación. Es válido destacar que se generan con la misma los diferentes componentes, servicios, contenedores, etc que se utilizaron_


License
### Instalación 🔧    
``` ng new [Proyecto]
    ng generate components nombre del componente[con su ruta, por default seria sobre app]   o
    ng g c container/Home
    ng g s [crea el servicio]
 ```
     
* 

### BACKEND


Laravel is accessible, powerful, and provides tools required for large, robust applications.
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
### Install 🔧    
``` composer create-project --prefer-dist laravel/laravel [Project]
    php artisan make:model [name] -cmr   
 ```
     
## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/G1ovann16/E-Commerce/blob/master/README.md) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.


## Autor ✒️

* **Giovanni Landaburo Del Arco** - *Trabajo Inicial* - [glandaburo](https://github.com/G1ovann16)