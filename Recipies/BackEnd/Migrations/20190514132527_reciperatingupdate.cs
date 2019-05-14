using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd.Migrations
{
    public partial class reciperatingupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "RecipeRatings",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_RecipeRatings_UserId",
                table: "RecipeRatings",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeRatings_AspNetUsers_UserId",
                table: "RecipeRatings",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RecipeRatings_AspNetUsers_UserId",
                table: "RecipeRatings");

            migrationBuilder.DropIndex(
                name: "IX_RecipeRatings_UserId",
                table: "RecipeRatings");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "RecipeRatings");
        }
    }
}
