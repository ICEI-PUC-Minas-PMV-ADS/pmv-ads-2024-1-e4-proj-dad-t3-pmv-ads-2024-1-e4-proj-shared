using api_reservas.Models.Interfaces;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;
using BCryptNet = BCrypt.Net.BCrypt;

namespace api_reservas.Models.BaseModels
{
    public class BaseUser : IBaseEntity
    {
        private string _password;

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [Required(ErrorMessage = "O Nome é Obrigatório")]
        [MaxLength(50, ErrorMessage = "O tamanho não pode exceder 50 caracteres")]
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PasswordSalt { get; set; }

    }
}
