using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Text;
using System;

/*
var connection = " "; // адрес строки подключения

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();
builder.Services.builder.Services.AddDbContext<DBContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString(connection)));*/

public static void Main()
{
    var optionsBuilder = new DbContextOptionsBuilder<DBContext>();
    optionsBuilder.UseSqlServer("");

    using (var content = new DBContext(optionsBuilder.Options))
    {
        while (true)
        {
            var sendingEmails = content.Users
                .Where(ev => !ev.IsSent)
                .ToList();

            content.SaveChanges();
            Thread.Sleep(30000);
        }
    }
    Console.ReadKey();
}



