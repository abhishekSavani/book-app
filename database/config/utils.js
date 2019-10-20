module.exports = function (express, app, path) {
    /*
     * Serving static directories
     * =============================================================================
     */
    app.use("/root", express.static(path.resolve("/")));
    app.use("/dist", express.static(path.resolve("dist")));

    app.use("/uploads", express.static(path.resolve("uploads")));
    app.use("/logs", express.static(path.resolve("logs")));
    app.use("/resize", express.static(path.resolve("src/assets/resize")));

    /*
     * Admin Directories
     */
    // app.use("/admin_dist", express.static(path.resolve("admin_dist")));

    return app;
};