
// Part 2: JavaScript functions
        
        // Global variable
        let animationInterval;
        
        // Function with parameters and return value
        function calculateSum(a, b) {
            // Local variables - scope is limited to this function
            const result = a + b;
            return result;
        }
        
        // Function demonstrating scope
        function calculate() {
            const num1 = parseInt(document.getElementById('num1').value) || 0;
            const num2 = parseInt(document.getElementById('num2').value) || 0;
            
            // Call function with parameters and use return value
            const sum = calculateSum(num1, num2);
            
            // Update DOM with result
            document.getElementById('calcResult').textContent = `The sum of ${num1} and ${num2} is ${sum}`;
        }
        
        // Cheering Greeting Functions
        function generateGreeting() {
            const name = document.getElementById('nameInput').value.trim();
            const greetingMessage = document.getElementById('greetingMessage');
            
            if (!name) {
                alert("Please enter your name first!");
                return;
            }
            
            // Clear previous greeting and effects
            greetingMessage.innerHTML = '';
            greetingMessage.classList.remove('shining');
            
            // Create greeting text
            const greetings = [
                `Hello, ${name}! You're amazing!`,
                `Welcome, ${name}! Today is your day!`,
                `Hey ${name}! You shine brighter than stars!`,
                `Hi there, ${name}! The world is cheering for you!`,
                `Greetings, ${name}! You're fantastic!`
            ];
            
            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            
            const greetingText = document.createElement('div');
            greetingText.className = 'greeting-text cheering bounce';
            greetingText.textContent = randomGreeting;
            
            // Create shine overlay
            const shineOverlay = document.createElement('div');
            shineOverlay.className = 'shine-overlay';
            
            greetingMessage.appendChild(greetingText);
            greetingMessage.appendChild(shineOverlay);
            
            // Add the shining class after a brief delay to trigger the animation
            setTimeout(() => {
                greetingMessage.classList.add('shining');
            }, 100);
            
            // Create confetti effect
            createConfetti();
            
            // Create floating particles
            createParticles();
        }
        
        function createConfetti() {
            const greetingMessage = document.getElementById('greetingMessage');
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                
                // Random properties
                const size = Math.random() * 10 + 5;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const left = Math.random() * 100;
                const animationDelay = Math.random() * 2;
                const animationDuration = Math.random() * 3 + 2;
                
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                confetti.style.backgroundColor = color;
                confetti.style.left = `${left}%`;
                confetti.style.animation = `confettiFall ${animationDuration}s ease-in ${animationDelay}s infinite`;
                
                greetingMessage.appendChild(confetti);
            }
        }
        
        function createParticles() {
            const greetingMessage = document.getElementById('greetingMessage');
            
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random properties
                const size = Math.random() * 8 + 2;
                const left = Math.random() * 100;
                const animationDelay = Math.random() * 2;
                const animationDuration = Math.random() * 3 + 2;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${left}%`;
                particle.style.animation = `particleFloat ${animationDuration}s ease-in ${animationDelay}s infinite`;
                
                greetingMessage.appendChild(particle);
            }
        }
        
        // Part 3: Combined CSS & JavaScript
        
        function startAnimation() {
            const box = document.getElementById('animatedBox');
            box.classList.add('animate-box');
            
            // Demonstrate changing styles with JavaScript
            animationInterval = setInterval(() => {
                const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9c74f'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                box.style.backgroundColor = randomColor;
            }, 2000);
        }
        
        function stopAnimation() {
            const box = document.getElementById('animatedBox');
            box.classList.remove('animate-box');
            clearInterval(animationInterval);
            box.style.backgroundColor = '';
        }
        
        function toggleModal() {
            const modal = document.getElementById('myModal');
            modal.classList.toggle('show');
        }
        
        // Initialize page with some animations
        window.addEventListener('load', () => {
            // Animate sections on load
            document.querySelectorAll('section').forEach((section, index) => {
                section.style.animation = `fadeIn 0.5s ease-out ${index * 0.3}s both`;
            });
            
            // Allow pressing Enter to generate greeting
            document.getElementById('nameInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    generateGreeting();
                }
            });
        });