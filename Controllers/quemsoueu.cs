using System;
using Microsoft.AspNetCore.Mvc;

namespace QuemSouEuAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuemSouEuAPIController : ControllerBase
    {
        [HttpGet]
        public Object Get()
        {
            return new { nome = "Kaylany", sobrenome = "Paulus", usuarioGitHub = "kaylany-paulus" };
        }
    }
}