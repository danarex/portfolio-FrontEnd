
package com.portfolio.dana.Entity;


import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Getter @Setter
@Entity
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
      //relacion
    @ManyToOne
    //creacion de columna con llave foranea
    @JoinColumn(name = "personaid", insertable=false, updatable=false)
    //para que se borre si se borra la persona
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Persona persona;
    
    private Long personaid;
    
public Experiencia(Long id, String nombre, String puesto,String inicio, String fin, String img){
        this.id = id;
        this.nombre= nombre;
        this.puesto = puesto;
        this.inicio = inicio;
        this.fin= fin;
        this.img = img;
} 

public Experiencia(){

}

@NotNull
@Size(min=1, max=25, message="No cumple con la longitud")
private String nombre;

@NotNull
@Size(min=1, max=25, message="No cumple con la longitud")
private String puesto;


@NotNull
@Size(min=1, max=25, message="No cumple con la longitud")
private String inicio;

@NotNull
@Size(min=1, max=25, message="No cumple con la longitud")
private String fin;


@Size(min=1, max=100, message="No cumple con la longitud")
private String img;
    
}
