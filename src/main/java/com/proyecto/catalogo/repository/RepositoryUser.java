package com.proyecto.catalogo.repository;

//@author Angie Moreno

import com.proyecto.catalogo.interfaz.InterfaceUser;
import com.proyecto.catalogo.model.User;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RepositoryUser {
    @Autowired
    private InterfaceUser InterfaceUser;
    
    public List<User> getAll(){
        return (List<User>) InterfaceUser.findAll();
    }
    
    public Optional<User> getUser(int id){
        return InterfaceUser.findById(id);
    }
    
    public User save(User user){
        return InterfaceUser.save(user);
    }
    
    public boolean existeEmail(String email){
        Optional<User> usuario = InterfaceUser.findByEmail(email);
        return !usuario.isEmpty();
    }
    
    public Optional<User> autenticarUsuario(String email, String password){
        return InterfaceUser.findByEmailAndPassword(email, password);
    }
}
