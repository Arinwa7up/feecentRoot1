// Add this instead (required for Vercel)
// ==================== SERVER STARTUP ====================

const PORT = process.env.PORT || 3000;

// For Fly.io / self-hosted environments
if (process.env.NODE_ENV !== 'production' || process.env.IS_FLYIO === 'true') {
  // Start the server normally for Fly.io
  server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 Socket.IO enabled for real-time chat`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔌 Database: ${process.env.SUPABASE_URL ? 'Connected' : 'Not Connected'}`);
  });
}

// For Vercel serverless deployment
if (process.env.VERCEL === '1') {
  // Export for Vercel (no server.listen())
  module.exports = app;
} else {
  // For Fly.io and other environments, we already started the server above
  // But we also export for compatibility
  module.exports = app;
}

// Also handle the case where neither is set (e.g., local development)
if (!process.env.VERCEL && !process.env.IS_FLYIO && !process.env.NODE_ENV) {
  // Default to running the server
  server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}
