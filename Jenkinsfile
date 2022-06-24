pipeline {
  agent any
    environment {
        CI = 'true'
    }
  tools {nodejs "nodejs"}
  stages {     
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'cd client;npm install'
      }
    }  
    stage('Test') {
      steps {  
        echo 'Test'
      }
    }
  }
}