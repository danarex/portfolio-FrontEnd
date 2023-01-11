
package com.portfolio.dana.Entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class Proyectos {
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
    
public Proyectos(Long id, String nombre, String descripcion, String fecha, String link, String img){
        this.id = id;
        this.nombre= nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.link = link;
        this.img = img;
} 

public Proyectos(){

}

@NotNull
@Size(min=1, max=25, message="No cumple con la longitud")
private String nombre;

@NotNull
@Size(min=1, max=200, message="No cumple con la longitud")
private String descripcion;

@NotNull
@Size(min=1, max=25, message="No cumple con la longitud")
private String fecha;


@Size(min=1, max=100, message="No cumple con la longitud")
private String link;


@Size(min=1, max=100, message="No cumple con la longitud")
private String img;
    
}
