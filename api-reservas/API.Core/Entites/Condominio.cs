using api_reservas.Core.Dtos;
using api_reservas.Core.Models.BaseModels;
using System.ComponentModel.DataAnnotations;

namespace api_reservas.Core.Models
{
    public class Condominio : BaseEntity
    {
        public Condominio() { }

        public Condominio(Usuario user) 
        {
            Name = user.Name;
            UserId = user.Id;
            CNPJ = user.Cnpj;

        }
        //public Condominio(CreateUserDTO entity)
        //{
        //    Name = entity.Nome;
        //    Email = entity.Email;
        //    CNPJ = entity.Cnpj;
        //    Password = entity.Password;
        //    PasswordSalt = entity.PasswordSalt;
        //}
        public string Name { get; set; }
        public string UserId { get; set; } 
        public string CNPJ { get; set; }
        public Condomino[]? Condominos { get; set; }
        public Local[]? Locais { get; set; }
        public Reserva[]? Reservas { get; set; }
    }
}
