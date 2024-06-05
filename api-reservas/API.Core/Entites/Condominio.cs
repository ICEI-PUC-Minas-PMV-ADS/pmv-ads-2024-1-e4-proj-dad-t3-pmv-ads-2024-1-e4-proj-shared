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

        [Required(ErrorMessage = "O Nome do Condominio é obrigatório")]
        [MaxLength(50, ErrorMessage = "O tamanho não pode exceder 50 caracteres")]

        public string CNPJ { get; set; }
        public Condomino[]? Condominos { get; set; }
        public Local[]? Locais { get; set; }
        public Reserva[]? Reservas { get; set; }
    }
}
