public class KafkaProducer {
    public static void main(String[] args){
        // Define Kafka producer properties and serialize msgs keys && values
        Properties prop = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

        // Create a Kafka producer instance
        Producer<String, String> producer = new KafkaProducer<>(props);

        // Create a Kafka record with topic, key, and value
        ProducerRecord<String, String> record = new ProducerRecord<>("my-topic", "key", "value");

        // Send the record to the Kafka broker
        producer.send(record);

        // Close the producer to release resources
        producer.close();
    }
}