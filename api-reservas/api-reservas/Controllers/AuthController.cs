using api_reservas.Controllers.DTO;
using api_reservas.Services;
using Microsoft.AspNetCore.Mvc;

namespace api_reservas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController
    {

        // -- POST REGISTRO
        [HttpPost]
        public async Task<IActionResult> Register(RegisterDTO entity)
        {
            if (entity.isCondomino)
            {
                // -- cria um condomino

                // -- chama o controlador de condomino para criar um novo condomno

                // -- apos retorno bem sucedido do usuario criado, cria e retorno um jwt


            }
            else
            {
                // --cria um condominio

                // -- chama o controlador de condominio para criar um novo condomino

                // -- apos retorno bem sucedido do usuario criado, cria e retorno um jwt
            }

            return null;
        }

    }
}
