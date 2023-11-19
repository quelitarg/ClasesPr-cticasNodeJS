module.exports = {
    //home: (req, res) => res.send("Página de Home - Sitio Principal"),
    contact:(req, res) => res.send("Página de Contacto - Medio de contacto"),
    //about:(req, res) => res.send("Página Sobre Nosotros - Conocenos"),
    about:(req, res) => {
        return res.render('nosotros', {
            message:'Este texto es dinámico'});
        },
    home: (req, res) => {
    return res.render('index', {
        message:'Este texto es dinámico',
        list: [
            {
                name: "Dell XPS 13",
                age: 499
            },
            {
                name: "HP Spectre x360 13",
                age: 679
            },
            {
                name: "Lenovo Yoga C940",
                age: 549
            } 
        ]
    });
    }
}
/*home: (req, res) => res.render('home', {
    productos: [
      "Dell XPS 13",
      "HP Spectre x360 13",
      "Lenovo Yoga C940",
    ]
     
 });
 
 home: res.render('index', {
    list: [
        {
            name: "Dell XPS 13",
            age: 499
        },
        {
            name: "HP Spectre x360 13",
            age: 679
        },
        {
            name: "Lenovo Yoga C940",
            age: 549
        } 
    ]
 })
 
}
*/