using Microsoft.AspNetCore.Mvc;

namespace Stare_Y.POS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        [HttpPost]
        public IActionResult ProcessPayment()
        {
            // Implement payment processing logic here
            return Ok("Payment processed successfully.");
        }
    }
}
