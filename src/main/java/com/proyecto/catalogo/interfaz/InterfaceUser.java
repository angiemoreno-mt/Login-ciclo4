package com.proyecto.catalogo.interfaz;

// @author Angie Moreno

import com.proyecto.catalogo.model.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;


public interface InterfaceUser extends CrudRepository<User, Integer>{
    Optional<User> findByEmail (String email);
    Optional<User> findByEmailAndPassword(String email, String password);
}
