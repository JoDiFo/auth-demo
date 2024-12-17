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

class Program
{
    public static void Main()
    {
        var builder = Microsoft.AspNetCore.Builder.WebApplication.CreateBuilder();

        builder.Services.AddAuthorization();
        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    
                    ValidateIssuer = true,
                    
                    ValidIssuer = AuthOptions.ISSUER,
                    
                    ValidateAudience = true,
                    
                    ValidAudience = AuthOptions.AUDIENCE,
                    
                    ValidateLifetime = true,
                    
                    IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                    
                    ValidateIssuerSigningKey = true,
                };
            });
        var app = builder.Build();

        app.UseAuthentication();
        app.UseAuthorization();

        app.Map("/login/{username}", (string username) =>
        {
            var claims = new List<Claim> { new Claim(ClaimTypes.Name, username) };
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    claims: claims,
                    expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(2)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        });

        app.Map("/data", [Authorize] () => new { message = "Hello!" });

        app.Run();
    }
}


