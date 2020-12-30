describe('Login, Validacion, Creacion de nuevo proyecto',function() {
    const randomName = Math.random().toString().substr(2,5);
    const randomCode = Math.random().toString().substr(2,4);
    const randomHour = Math.ceil(Math.random()*10).toString().padStart(2, '0')


    it('Login Lemon',function(){
        cy.visit('http://qa.staging.timebillingapp.com/#dashboard');
        cy.get('#user_email').type('duran3232@gmail.com');
        cy.get('#user_password').type('Alaska32.');
        cy.get('.btn').click();     
       
       })

    it('Validar existencia de Lemontech con codigo 000003',function(){
        cy.get('.ui-administration > [href="#"]').click();
        cy.get('.ui-clients > a').click();
        cy.get(':nth-child(3) > ._5HRyT').contains('000003');
        cy.get('tbody > :nth-child(3) > :nth-child(1)').contains('Lemontech');
    })  

    it('Crear proyecto nuevo',function(){
        cy.get('.ui-administration > [href="#"]').click();
        cy.get('.ui-projects > a').click(); 
        cy.get('.add_project').click();
        cy.get('.form-control').first().type(`Prueba QA Carlos Duran ${randomName}`);
        cy.get('.form-control').eq(1).type(randomName);
        cy.get('.col-md-9 > :nth-child(2) > .Select > .Select__control').click();
        cy.get('.Select__input > input').type('Lemontech');
        cy.get('.Select__option__text').click();  
        cy.get('.form-control').eq(2).type(randomCode);  
        cy.get('.form-group.cFpLT.col-md-6').first().click(); 
        cy.get('.css-yly5yz > div').first().click();  
        cy.get('.form-group.cFpLT.col-md-6').eq(1).click(); 
        cy.get('.css-yly5yz').first().click(); 
        cy.get('.btn-primary').click()
        cy.wait(5000);
        
    })
    it('Crear en el calendario una hora para el proyecto recien creado',function(){
        cy.get('.ui-management > [href="#"]').click();
        cy.get('.ui-management > .dropdown-menu > :nth-child(1) > a').click();
        cy.contains('Add time entry').click();
        cy.get('.Select__input').type(`Prueba QA Carlos Duran ${randomName}{enter}`); 
        cy.get('.Select__option').first().click(); 
        cy.get('.TZRfK > ._2xG41 > .DZCpt > :nth-child(1) > ._3s-Zy > :nth-child(1)').type(randomHour);
        cy.get('.btn-primary').click();
        cy.wait(5000);  

        
    })
    it('Validar en pantalla reporte que la hora ingresada en el calendario para el nuevo proyecto sean coincidan',function(){
        const randomStringHour = randomHour.replace(/0+/, '')
        cy.get('.ui-reports > a > .hidden-sm').click();
        cy.get('.Container > :nth-child(2) > :nth-child(2)').click();
        cy.get('[style="top: 138px; left: 0px;"] > [style="height: 54px; width: 163.094px;"]').contains('Carlos Duran');
        cy.get('[style="top: 138px; left: 0px;"] > [style="height: 54px; width: 168.25px;"]').contains(`${randomStringHour}h 00m`);
       
    }) 
    
    
}) 