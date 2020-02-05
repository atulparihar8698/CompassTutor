using System;
using System.Collections.Generic;
using System.Text;
using CompassTutor.Models;
using Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace CompassTutor.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public virtual DbSet<Subject> Subjects { get; set; }
        public virtual DbSet<Time> Times { get; set; }
        public virtual DbSet<SubjectType> SubjectTypes { get; set; }
        public virtual DbSet<Feedback> Feedback { get; set; }
        public virtual DbSet<Schedule> Schedule { get; set; }
        public virtual DbSet<Slot> Slots { get; set; }
        public virtual DbSet<Student> Student { get; set; }
        public virtual DbSet<Tutor> Tutor { get; set; }
        public virtual DbSet<TutorSubject> TutorSubjects { get; set; }
        public virtual DbSet<Country> Country { get; set; }
        public virtual DbSet<State> State { get; set; }
        public virtual DbSet<City> City { get; set; }
        public virtual DbSet<TimeZones> TimeZones { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configurationRoot = new ConfigurationBuilder()
                  .SetBasePath(System.IO.Directory.GetCurrentDirectory())
                  .AddJsonFile("appsettings.json")
                  .Build();
                var connectionString = configurationRoot.GetConnectionString("DefaultConnection");
                optionsBuilder.UseSqlServer(connectionString);
            }
        } 


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.HasAnnotation("ProductVersion", "2.2.1-servicing-10028");


            modelBuilder.Entity<Feedback>(entity =>
            {
                entity.ToTable("Feedback");

                entity.HasKey(e => e.Id);

                entity.Property(e => e.Id)
                     .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Schedule>(entity =>
            {
                entity.ToTable("Schedule");
                entity.HasKey(e => e.Id);               
            });
            modelBuilder.Entity<Slot>(entity =>
            {
                entity.ToTable("Slots");
                entity.HasKey(e => e.Id);               
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.ToTable("Student");

                entity.HasKey(e => e.Id);

            });
           
            modelBuilder.Entity<Tutor>(entity =>
            {
                entity.ToTable("Tutors");

                entity.HasKey(e => e.Id);
                

            });
            modelBuilder.Entity<TutorSubject>(entity =>
            {
                entity.ToTable("TutorSubjects");

                entity.HasKey(e => e.Id);

            });
            modelBuilder.Entity<Country>(entity =>
            {
                entity.ToTable("countries");

                entity.HasKey(e => e.Id);
                

            });

            modelBuilder.Entity<Time>(entity =>
            {
                entity.ToTable("Times");

                entity.HasKey(e => e.Id);


            });



            modelBuilder.Entity<Subject>(entity =>
            {
                entity.ToTable("Subjects");

                entity.HasKey(e => e.Id);


            });

            modelBuilder.Entity<SubjectType>(entity =>
            {
                entity.ToTable("SubjectTypes");

                entity.HasKey(e => e.Id);
                entity.Property(b => b.SubjectId)
                .HasColumnName("SubjectId");

            });


            modelBuilder.Entity<State>(entity =>
            {
                entity.ToTable("states");

                entity.HasKey(e => e.Id);
                entity.Property(b => b.CountryId)
                .HasColumnName("country_id");

            });
            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("cities");

                entity.HasKey(e => e.Id);
                entity.Property(b => b.StateId)
                .HasColumnName("state_id");

            });

            modelBuilder.Entity<TimeZones>(entity =>
            {
                entity.ToTable("TimeZones");

                entity.HasKey(e => e.Id);               

            });
            

        }
    }
}
