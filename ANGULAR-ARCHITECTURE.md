# ASP.NET Core and Angular - Understanding Standalone vs Module Approaches

This repository demonstrates a complete full-stack application built with **ASP.NET Core** (backend) and **Angular** (frontend), showcasing both modern **Standalone** and traditional **Module-based** architectural approaches in Angular.

## 🏗️ Project Structure

```
├── src/
│   ├── Healcheck.Server/          # ASP.NET Core Web API
│   │   ├── Program.cs
│   │   ├── ICMPHealthCheck.cs     # Custom health check implementation
│   │   └── ...
│   └── Healcheck.Client/          # Angular Frontend
│       ├── src/app/               # Standalone components (current)
│       ├── module-examples/       # Module-based examples
│       └── README.md              # Detailed Angular documentation
└── Healcheck.sln                  # Visual Studio solution
```

## 🚀 Angular Architecture Approaches

This project serves as a comprehensive guide to understanding two fundamental ways to structure Angular applications:

### 1. **Standalone Approach** (Primary Implementation)
- **Modern** Angular 14+ pattern
- **Simplified** bootstrap with `bootstrapApplication()`
- **Direct imports** in components
- **Better tree-shaking** and performance
- **Future-recommended** by Angular team

### 2. **Module-based Approach** (Educational Examples)
- **Traditional** Angular 2+ pattern  
- **NgModule-based** organization
- **Centralized** dependency management
- **Well-established** patterns and practices

## 📚 What You'll Learn

### Frontend (Angular)
- ✅ How to bootstrap Angular apps with standalone components
- ✅ How to migrate from modules to standalone components
- ✅ When to choose each architectural approach
- ✅ Practical examples of both patterns
- ✅ Performance implications and trade-offs
- ✅ Modern Angular development practices

### Backend (ASP.NET Core)
- ✅ Health check implementation with custom ICMP checks
- ✅ API development with .NET
- ✅ Integration with Angular frontend
- ✅ Server-side configuration

## 🚀 Quick Start

### Prerequisites
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/)
- [Angular CLI 19+](https://angular.io/cli)

### Run the Application

1. **Start the ASP.NET Core API:**
   ```bash
   cd src/Healcheck.Server
   dotnet run
   ```

2. **Start the Angular Client:**
   ```bash
   cd src/Healcheck.Client
   npm install
   npm start
   ```

3. **Open your browser:**
   - Frontend: http://localhost:4200
   - API: https://localhost:7154

## 📖 Detailed Documentation

For comprehensive information about Angular approaches:

👉 **[See the detailed Angular documentation](./src/Healcheck.Client/README.md)**

This includes:
- Complete explanation of standalone vs module approaches
- Code examples and comparisons
- Migration strategies
- Best practices and recommendations
- When to use each approach

## 🎯 Key Learning Outcomes

After exploring this repository, you'll understand:

1. **How to structure modern Angular applications** using standalone components
2. **The differences between standalone and module approaches** with practical examples
3. **When to choose each architectural pattern** based on project requirements
4. **How to migrate existing applications** from modules to standalone
5. **Integration patterns** between Angular frontend and ASP.NET Core backend

## 🤝 Contributing

Contributions are welcome! When adding examples or improvements:

- Follow the established patterns for standalone components
- Add educational module-based examples to `module-examples/` 
- Update documentation to reflect architectural decisions
- Include practical, real-world examples

## 📋 Project Status

- ✅ **Standalone Implementation**: Complete with routing, HTTP client, and components
- ✅ **Module Examples**: Educational examples showing traditional approach
- ✅ **Documentation**: Comprehensive guides and comparisons
- ✅ **ASP.NET Core Backend**: Health check API with custom implementations
- ✅ **Integration**: Frontend and backend working together

## 🏷️ Tags

`angular` `standalone-components` `ngmodules` `asp-net-core` `full-stack` `architecture` `tutorial` `migration` `angular-19` `dotnet-8`

---

**Happy coding! 🚀**