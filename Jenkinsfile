pipeline {
  agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    
  stages {
        
    // stage('Git') {
    //   steps {
    //     git 'https://github.com/AndrewJBateman/pern-stack-database.git'
    //   }
    // }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
