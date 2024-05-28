using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;
using api_reservas.Models.Interfaces;
using api_reservas.Models.Dtos;


namespace api_reservas.Models
{
    public class Usuario : IBaseEntity
    {
        private string _password;
        public Usuario() { }
        public Usuario(CreateUserDTO novoUsuario)
        {
            Name = novoUsuario.Nome;
            Email = novoUsuario.Email;
            Password = novoUsuario.Password;
            PasswordSalt = novoUsuario.PasswordSalt;
            if (novoUsuario.isCondominio)
            {
                Cnpj = novoUsuario.Cnpj;
            }
            else
                Cpf = novoUsuario.Cpf;
        }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [Required(ErrorMessage = "O Nome é Obrigatório")]
        [MaxLength(50, ErrorMessage = "O tamanho não pode exceder 50 caracteres")]
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PasswordSalt { get; set; }
        public string Cnpj { get; set; }
        public string Cpf { get; set; } 
    }
}
