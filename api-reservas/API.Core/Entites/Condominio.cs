using api_reservas.Core.Dtos;
using api_reservas.Core.Models.BaseModels;
using System.ComponentModel.DataAnnotations;

namespace api_reservas.Core.Models
{
    public class Condominio : BaseEntity
    {
        public Condominio() { }
        //public Condominio(CreateUserDTO entity)
        //{
        //    Name = entity.Nome;
        //    Email = entity.Email;
        //    CNPJ = entity.Cnpj;
        //    Password = entity.Password;
        //    PasswordSalt = entity.PasswordSalt;
        //}

        public int UserId { get; set; } 
        public string CNPJ { get; set; }
        public Condomino[]? Condominos { get; set; }
        public Local[]? Locais { get; set; }
        public Reserva[]? Reservas { get; set; }
    }
}
