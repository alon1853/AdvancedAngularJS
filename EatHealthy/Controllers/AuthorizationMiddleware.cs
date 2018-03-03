using EatHealthy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EatHealthy.Controllers
{
    public static class AuthorizationMiddleware
    {
        public static bool AdminAuthorized(HttpSessionStateBase Session)
        {
            return (((Client)Session["Client"]) != null && ((Client)Session["Client"]).IsAdmin);
        }

        public static bool Authorized(HttpSessionStateBase Session)
        {
            return (((Client)Session["Client"]) != null);
        }
    }   
}