import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author fjoaq
 */

public class Persistencia {
    
    private Connection cn;
    
    private ResultSet rs; // recibe datos de la base
    
    private PreparedStatement ps;
    
    //private ResultSetMetaData rsm;
    
    public String servidor, basededatos, usuario, clave, ejecutar;
    
    public Connection conectarse() throws SQLException{ try {
        // Crear o determinar un driver para cada conexión
        
        // Cargo el driver
        
        Class.forName("com.mysql.jbdc.Driver"); // Paso nombre del driver
        
        // En el primer parámetro paso ruta del driver
        
        servidor = "localhost:3306/";
        
        basededatos = "tp-integrador-cac";
        
        usuario = "root";
        
        clave = "";
        
        cn = DriverManager.getConnection("jdbc:mysql://" + servidor + basededatos+"?autoReconnect=true&useSSL=false", usuario, clave);
        
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(Persistencia.class.getName()).log(Level.SEVERE, null, ex);
        }
    
        return cn;
    
    }
    
    //********************************************
    
    public ResultSet consultaSQL(String busqueda){
        
        try {
            ps = conectarse().prepareStatement(busqueda); 
            
            rs = ps.executeQuery();
            
            //rsm = rs.getMetaData();  
          
        } catch (SQLException ex) {
            Logger.getLogger(Persistencia.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return rs;
    }
    
}
