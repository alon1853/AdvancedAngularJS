using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EatHealthy.Startup))]
namespace EatHealthy
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
