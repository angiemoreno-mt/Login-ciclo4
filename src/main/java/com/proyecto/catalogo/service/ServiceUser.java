package com.proyecto.catalogo.service;

// @author Angie Moreno

import com.proyecto.catalogo.model.User;
import com.proyecto.catalogo.repository.RepositoryUser;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service 
public class ServiceUser {
    @Autowired
    private RepositoryUser repositoryUser;
    
    public List<User> getAll() {
        return repositoryUser.getAll();
    }
    
    public Optional<User> getUser(int id) {
        return repositoryUser.getUser(id);
    }
    
    public boolean existeEmail(String email) {
        return repositoryUser.existeEmail(email);
    }
    
    public User registrar(User user) {
        if (user.getId() == null) {
            if (existeEmail(user.getEmail()) == false) {
                return repositoryUser.save(user);
            } else {
                return user;
            }
        } else {
            return user;
        }
    }
    
    public User autenticarUsuario(String email, String password) {
        Optional<User> usuario = repositoryUser.autenticarUsuario(email, password);

        if (usuario.isEmpty()) {
            return new User(email, password, "NO DEFINIDO");
        } else {
            return usuario.get();
        }
    }
}
