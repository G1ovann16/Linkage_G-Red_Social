### About Project 🚀
_This project is focused on the public; it will be a Social Network, in which the client will be able to make publications with the theme that they deems appropriate, they will be able to make friends, having this as an end or at least one of them, who feel in his comfort zone and can appreciate people who think or create similarly. You will be given the option to edit your profile; to which anyone who wants to follow will have access. Go ahead with your PUBLICATION._
    ![LINKAGE-G LANDING](http://glandaburo.online/landing.png)
      **PAGE Landing**


  ### FRONTEND

  ###Installation of this project 🔧
 _The purpose of this project is for it to be useful to the user and to inspire other developers to collaborate in this digital world. Next, I will take the necessary steps to get your work environment ready._

### INSTALL 🔧    
``` npm install
    ng new [Proyecto]
    ng generate components nombre del componente[con su ruta, por default seria sobre app]   o
    ng g c container/Home
    ng g s [crea el servicio]
    ng serve
 ```
## DEVELOPED WITH 🛠️


* [Angular CLI](https://github.com/angular/angular-cli) version 9.1. _This project was generated with this tool, in the link you can access its documentation. It is worth noting that the different components, services, containers, etc. That were used are generated with it._
*[Boostrap](https://getbootstrap.com/docs/4.5/getting-started) _Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page._
 ## ADD
*[AntDesign](https://ng.ant.design/docs/getting-started/) _Ant Design of Angular is dedicated to providing a good development experience for programmers._
*[Momentjs](https://momentjs.com/)_To validate, manipulate, and display dates and times in JavaScript._
*[NPMJS=>Ngx_pagination](https://www.npmjs.com/package/ngx-pagination)
 
 
 ![LINKAGE-G HOME](http://glandaburo.online/home.png)
  **PAGE Home**
  

### Install 🔧  
_For the use of this project you must follow the route_
*[LINKAG-G](https://github.com/G1ovann16/Linkage_G-Red_Social); _In the same time you can download or make a clone of the repository once obtained, the following command should suffice:_

``` npm install
    ng serve --o
 ```

### CODE
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
_In this small code, a GET request is made to the database where all the post created by users are obtained, as well as their respective likes and comments._

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
_This other code analyzes which user you want to access, if it is yourself who mistakenly touched, or who was more comfortable at the time, you will access your profile otherwise you would go to see the user's information (without being able to some modification)._


![LINKAGE-G PROFILE](http://glandaburo.online/profile.png)
  **PAGE Profile**

### BACKEND

_Laravel is accessible, powerful, and provides tools required for large, robust applications_


## Developer with 🛠️


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

### Install Project 🔧    
_For the use of this code you may well have a frontend made by you; or once downloaded or cloned, the repository should create a database which must be located. **.env**_

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=LinkageG
DB_USERNAME=root
DB_PASSWORD=
```
_In this case we have put the same name as our project_

``` 
    php artisan migrate:fresh --seed
    php artisan passport:install
    php artisan serve
 ```

 ### CODE
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
_In this code you can see the routes that the different endpoints have created, for the user controller, of which, if necessary, they are immersed in authentication (governed by the token) and all are accessed through users who have the prefix indicated._
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
_This code is nothing more than a function that allows us to upload the image desired by the user to the previously created publication._ 

 ![LINKAGE-G TABLE-RELATIONS](http://glandaburo.online/BaseDatos.png)
 **Data Base**
 _As you can see we have the list of tables used in the project._

_I hope you enjoy it and you like it!!!!!! ;)_

## Autor ✒️
* **Giovanni Landaburo Del Arco** - *Trabajo Inicial* - [glandaburo](https://github.com/G1ovann16)