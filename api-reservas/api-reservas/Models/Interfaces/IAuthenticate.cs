namespace api_reservas.Models.Interfaces
{
    public interface IAuthenticate
    {
        public interface IAuthenticate
        {
            Task<bool> AuthenticateAsync(string email, string password);
            Task<bool> UserExists(string email);
            public string GenerateToken(int id, string email);
        }
    }
}
