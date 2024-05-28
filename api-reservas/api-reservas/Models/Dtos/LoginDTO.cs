using BCryptNet = BCrypt.Net.BCrypt;

namespace api_reservas.Models.Dtos
{
    public class LoginDto
    {
        private string _password;
        public string Email { get; set; }
        public string Password
        {
            get { return HashPassword(_password); }
            set { _password=value; }
        }
        protected string Salt { get; set; }

        private string HashPassword(string password)
        {
            return BCryptNet.HashPassword(password, Salt);
        }
    }
}
